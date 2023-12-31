import React, { useContext } from 'react'
import UploadGuide from "../upload-guide"
import Gallery from "../gallery"
import ChoseYourImage from "../choose-your-image"
import { MyContext } from "../../App"

const GenerateImage = () => {
  const {uploadedImage, step} = useContext(MyContext)
  console.log(uploadedImage, 'img');
  return (
    <div>
      {
       step== 0? <UploadGuide />
        : step ==1 && <Gallery />
      }
      
    </div>
  )
}

export default GenerateImage