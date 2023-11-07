import React, { useContext, useState } from "react";
import ChoseImage1 from "./../../assets/images/chose-image-1.png";
import ChoseImage2 from "./../../assets/images/chose-image-2.png";
import ChoseImage3 from "./../../assets/images/chose-image-3.png";
import ChoseImage4 from "./../../assets/images/chose-image-4.png";
import ChoseImage5 from "./../../assets/images/chose-image-5.png";
import ChoseImage6 from "./../../assets/images/chose-image-6.png";
import LayOut from "../../layout";
import { SERVER } from "../../config/site";
import { MyContext } from "../../App";
const ChoseYourImage = () => {
  const {setUploadedImage, setStep} = useContext(MyContext)
  const [selected, setSelected] = useState("");
  const List = [
    ChoseImage1,
    ChoseImage2,
    ChoseImage3,
    ChoseImage4,
    ChoseImage5,
    ChoseImage6,
  ];
  const uploadHandler = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const url = SERVER + "/upload-image"
    fetch(url, {
      method: 'POST',
      body : formData
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.img){
        setUploadedImage(res.img)
        setStep(1)
      }
    })
    // navigate("/upload-guide");
  };
  return (
    <LayOut>
      <div className="chose-your-image-contaienr">
        <h1>CHOOSE YOUR IMAGES</h1>
        <div>
          <div className="chose-your-image-list-1">
            {List.slice(0, 2).map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelected(item)}
                  style={{
                    borderColor: selected === item ? "#FEE26F" : "transparent",
                  }}
                >
                  <img alt=" " src={item} />
                </button>
              );
            })}
          </div>
          <div className="chose-your-image-list-2">
            {List.slice(2).map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelected(item)}
                  style={{
                    borderColor: selected === item ? "#FEE26F" : "transparent",
                  }}
                >
                  <img alt=" " src={item} />
                </button>
              );
            })}
          </div>
        </div>
        <h3>Generate AI super hero Image</h3>
        <label>
          Select
          <input
            type="file"
            accept="image/*"
            onChange={(e) => uploadHandler(e.target.files)}
          />
        </label>
      </div>
      </LayOut>
  );
};
export default ChoseYourImage;
