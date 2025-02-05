import React from "react";
import { Tooltip } from "antd";

const CementSelector = ({ cements, onSelectCement, selectedCement }) => {
  const handleSelectCement = (cement) => {
    onSelectCement(cement);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="text-center text-sm w-[350px] mr-10">
            <h3 className="text-xl font-bold my-2">LOẠI XI MĂNG</h3>
            <p className="mb-6 uppercase">
              Chọn loại xi măng phù hợp với nhu cầu xây dựng của bạn.
            </p>
          </div>
          <div className="grid grid-cols-3 border rounded-lg p-4 gap-4 mr-10 h-fit">
            {cements.map((cement) => (
              <Tooltip
                title={
                  <div>
                    Giá:{" "}
                    <span style={{ color: "#FF78C5", fontWeight: "bold" }}>
                      {cement.price}
                    </span>
                  </div>
                }
                key={cement.id}
                onClick={() => handleSelectCement(cement)}
              >
                <div className="cursor-pointer m-auto">
                  <img
                    src={cement.image}
                    alt={`Cement ${cement.id}`}
                    className="w-20 h-auto border rounded-lg hover:border-4"
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="w-[600px] h-[700px]">
          {selectedCement ? (
            <>
              <img
                src={selectedCement.image}
                alt="Selected Cement"
                className="w-full h-auto border rounded-lg border-pink-500 p-2"
              />
              <p
                className="uppercase text-right mt-4"
                style={{ color: "#4A2BED" }}
              >
                Giá tạm thời:{" "}
                <span className="font-bold" style={{ color: "#4A2BED" }}>
                  {selectedCement.price}
                </span>
              </p>
            </>
          ) : (
            <div className="w-full h-full border rounded-lg border-pink-500 p-2 flex items-center justify-center">
              <p className="text-gray-500">
                Vui lòng chọn một loại xi măng để xem chi tiết ở đây.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CementSelector;
