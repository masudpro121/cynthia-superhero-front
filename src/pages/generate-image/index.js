import React, { useContext } from 'react'
import UploadGuide from "../upload-guide"
import Gallery from "../gallery"
import ChoseYourImage from "../choose-your-image"
import { MyContext } from "../../App"

const GenerateImage = () => {
  const {uploadedImage} = useContext(MyContext)
  console.log(uploadedImage, 'img');
  return (
    <div>
      {
        uploadedImage? 
          <UploadGuide />
        : <ChoseYourImage />
      }
      
      {/* <Gallery /> */}
    </div>
  )
}

export default GenerateImage