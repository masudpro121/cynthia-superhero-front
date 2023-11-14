import React, { useContext, useEffect, useState } from "react";
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
import { MyContext } from "../../App";
import { SERVER } from "../../config/site";
import checkImage from "../../utils/checkImage";
const UploadGuide = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(true);
  const {setProgress, uploadedImage, setGeneratedImages, setProgressImage, generatedImages, setStep} = useContext(MyContext)
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

  useEffect(()=>{
    if(!uploadedImage){
      navigate("/");
    }
  },[])
  const generateImage = () => {
    // navigate("/gallery")
    fetch(SERVER+'/generate-image', {
      method: 'POST', 
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        prompt: uploadedImage + ", a person dressed as a superhero.  The costume has a CON and H on the chest that incorporates advanced technology and features, represents a unique and powerful superhero costume with a distinct color scheme and emblem, unique powers and personality. cinematic lighting, detailed, illustration, --ar 9:16 --no cape blazer glasses costume. use these color on costume, hexa color code: #7769ff & #ffe67a. and use solid background color."
        
      })
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.success){
        setStep(1)
        setTimeout(()=>{
          setProgress(10)
        },5000)
        setTimeout(() => {
          setProgress(20);
          let myInterval = setInterval(() => {
            checkImage(res.messageId).then((checkRes) => {
           
              if(checkRes.progress > 20 ){
                setProgress(checkRes.progress);
              }
              if (checkRes.progress == 100) {
                clearInterval(myInterval);
              }
              if (checkRes.images) {
                setGeneratedImages(checkRes.images);
              }
              if (checkRes.progressImage) {
                setProgressImage(checkRes.progressImage);
              }
            });
          }, 5000);
          
        }, 20000);
      }
    })
  }
  return (
    <LayOut>
    <div className="upload-guide-container">
      <button onClick={() => navigate(-1)}>
        <img alt=" " src={Back} />
      </button>
      <div className="upload-guide-container-2">
        <div className="upload-guide-sec-1">
          <div className="upload-guide-sec-1-inner">
            <div className="upload-guide-sec-1-header">
              <h1>Upload Guide</h1>
              <div>
                <img alt=" " src={BlubIcon} />
                <button>Photo Uploading Guide</button>
              </div>
            </div>
            <div className="upload-guide-sec-1-list">
              {List.map((item, index) => {
                return (
                  <div key={index}>
                    <img alt=" " src={item.img} />
                    <div>
                      <img alt=" " src={item.check ? CheckIcon : CrossIcon} />
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
            <img alt=" " src={uploadedImage} />
            {/* <button className="upload-guide-sec-2-face-button">
              Face Recognizing
            </button> */}
            <div>
              <label className="reupload-button">
                <img alt=" " src={UploadIcon} />
                Reupload
                <input type="file" accept="image/*" />
              </label>
              <button
                className="next-button"
                onClick={generateImage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LayOut>
  );
};
export default UploadGuide;
