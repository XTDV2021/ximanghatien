const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Kết nối MongoDB Atlas thành công"))
    .catch((err) => console.log("Lỗi kết nối MongoDB:", err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    images: [String], // Array of image URLs
    description: String,
});
const Product = mongoose.model("Product", productSchema);

// Admin Schema
const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone: String,
    storeAddress: String,
});
const Admin = mongoose.model("Admin", adminSchema);

// CRUD for Product
app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.put("/products/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

app.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted successfully" });
});

// Admin Login
app.post("/admin/login", async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return res.status(401).send({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin._id }, "secret", { expiresIn: "1h" });
    res.send({ token });
});

// Update Admin info (phone, store address)
app.put("/admin/:id", async (req, res) => {
    const { phone, storeAddress } = req.body;
    const admin = await Admin.findByIdAndUpdate(req.params.id, { phone, storeAddress }, { new: true });
    res.send(admin);
});

app.get("/hello", (req, res) => {
    res.send("hi");
});

// Tạo dữ liệu mẫu xi măng
const sampleProducts = [
    {
        name: "Xi măng Hà Tiên PCB40",
        images: [
            "https://www.phanphoiximang.vn/vnt_upload/product/06_2020/thumbs/340_crop_dadung_bao.jpg",
            "https://www.phanphoiximang.vn/vnt_upload/product/06_2020/thumbs/340_crop_dadung_bao.jpg"
        ],
        description: "Xi măng Portland hỗn hợp PCB40 có cường độ nén ở tuổi 28 ngày đạt 40MPa, độ bền cao, thích hợp cho các công trình dân dụng và công nghiệp."
    },
    {
        name: "Xi măng Holcim Power-S",
        images: [
            "https://www.phanphoiximang.vn/vnt_upload/product/06_2020/thumbs/340_crop_dadung_bao.jpg",
            "https://holcim.com.vn/products/power-s-usage.jpg"
        ],
        description: "Xi măng Holcim Power-S là loại xi măng cao cấp, phù hợp cho các công trình có yêu cầu cường độ cao và thời gian thi công nhanh."
    },
    {
        name: "Xi măng Nghi Sơn PC30",
        images: [
            "https://nghison.com.vn/products/pc30.jpg",
            "https://nghison.com.vn/products/pc30-application.jpg"
        ],
        description: "Xi măng Portland PC30 Nghi Sơn thích hợp cho các công trình dân dụng nhỏ, vừa và các công trình không yêu cầu cường độ cao."
    },
    {
        name: "Xi măng Thăng Long PCB40",
        images: [
            "https://ximangthanglong.vn/pcb40.jpg",
            "https://ximangthanglong.vn/pcb40-strength.jpg"
        ],
        description: "Xi măng Thăng Long PCB40 có khả năng chống thấm tốt, độ bền cao, thích hợp cho các công trình thủy lợi và cầu đường."
    },
    {
        name: "Xi măng Vissai PCB30",
        images: [
            "https://vissai.vn/pcb30.jpg",
            "https://vissai.vn/pcb30-uses.jpg"
        ],
        description: "Xi măng Vissai PCB30 là loại xi măng phổ thông, giá thành hợp lý, phù hợp cho các công trình dân dụng cơ bản."
    }
];

// Thêm vào database
const insertSampleData = async () => {
    try {
        await Product.insertMany(sampleProducts);
        console.log("Đã thêm dữ liệu mẫu thành công!");
    } catch (error) {
        console.log("Lỗi khi thêm dữ liệu mẫu:", error);
    }
};

// Gọi hàm để thêm dữ liệu
insertSampleData();

app.listen(3000, () => console.log("Server is running on port 3000"));
