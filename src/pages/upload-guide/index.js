import React, { useState } from "react";
import Back from "./../../assets/svg/back.svg";
import { useNavigate } from "react-router-dom";
import Avatars from "./../../assets/images/avatars.png";
import UploadIcon from "./../../assets/svg/upload.svg";
import UploadGuide1 from "./../../assets/images/upload-guide-1.png";
import UploadGuide2 from "./../../assets/images/upload-guide-2.png";
import UploadGuide3 from "./../../assets/images/upload-guide-3.png";
import UploadGuide4 from "./../../assets/images/upload-guide-4.png";
import CheckIcon from "./../../assets/svg/check.svg";
import CrossIcon from "./../../assets/svg/cross.svg";
import BlubIcon from "./../../assets/svg/blub.svg";
import LayOut from "../../layout";
const UploadGuide = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(true);
  const List = [
    {
      img: UploadGuide1,
      title: "Front & Clear",
      check: true,
    },
    {
      img: UploadGuide2,
      title: "One Side",
      check: false,
    },
    {
      img: UploadGuide3,
      title: "No Sunglasses",
      check: false,
    },
    {
      img: UploadGuide4,
      title: "Blur Face",
      check: false,
    },
  ];
  return (
    <LayOut>
    <div className="upload-guide-container">
      <button onClick={() => navigate(-1)}>
        <img src={Back} />
      </button>
      <div className="upload-guide-container-2">
        <div className="upload-guide-sec-1">
          <div className="upload-guide-sec-1-inner">
            <div className="upload-guide-sec-1-header">
              <h1>Upload Guide</h1>
              <div>
                <img src={BlubIcon} />
                <button>Photo Uploading Guide</button>
              </div>
            </div>
            <div className="upload-guide-sec-1-list">
              {List.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.img} />
                    <div>
                      <img src={item.check ? CheckIcon : CrossIcon} />
                      <span>{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="upload-guide-container-inner"
          style={{ justifyContent: details ? "space-between" : "center" }}
        >
          <div className="upload-guide-sec-2">
            <img src={Avatars} />
            <button className="upload-guide-sec-2-face-button">
              Face Recognizing
            </button>
            <div>
              {/* <button className="reupload-button">
                  <img src={UploadIcon} />
                  Reupload
                </button> */}
              <label className="reupload-button">
                <img src={UploadIcon} />
                Reupload
                <input type="file" accept="image/*" />
              </label>
              <button
                className="next-button"
                onClick={() => navigate("/gallery")}
              >
                Next
              </button>
            </div>
            {!details && (
              <button
                className="add-details-button"
                onClick={() => setDetails(true)}
              >
                Add Details
              </button>
            )}
          </div>
          {details && (
            <div className="upload-guide-sec-3">
              <h6>Name</h6>
              <input type="text" />
              <h6>Job</h6>
              <input type="text" />
              <h6>Company</h6>
              <input type="text" />
              <button className="save-button" >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </LayOut>
  );
};
export default UploadGuide;
