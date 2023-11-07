import React, { useContext } from "react";
import DownloadIcon from "./../../assets/svg/download.svg";
import VerticalIcon from "./../../assets/svg/vertical.svg";
import Gallery1 from "./../../assets/images/gallery-1.png";
import Gallery2 from "./../../assets/images/gallery-2.png";
import Gallery3 from "./../../assets/images/gallery-3.png";
import Gallery4 from "./../../assets/images/gallery-4.png";
import Gallery5 from "./../../assets/images/gallery-5.png";
import Gallery6 from "./../../assets/images/gallery-6.png";
import Gallery7 from "./../../assets/images/gallery-7.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LayOut from "../../layout";
import { MyContext } from "../../App";
const Gallery = () => {
  const {generatedImages, progressImage, progress} = useContext(MyContext)
  console.log(progress, 'progress');
  console.log(progressImage,'progressimage');
  const List = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
  ];
  return (
    <LayOut>
      <div className="gallery-container">
        {
          progress < 100 && <div style={{textAlign:'center', color:'white'}}>Progress: {progress}%</div>
        }
        {
          progress > 0 && progress < 100 && progressImage && 
          <div style={{display:'flex', justifyContent:'center', margin: '10px'}}>
            <img alt=" " src={progressImage} />
          </div>
        }
        {
          progress == 100 && 
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {generatedImages?.map((item, index) => {
              return (
                <Grid key={index} item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div key={index} className="gallery-list">
                    <img alt=" " src={item} />
                    <div>
                      <button id="download-button">
                        <a target="_blank" href={item} download>
                          <img alt=" " src={DownloadIcon} />
                          M3.png
                        </a>
                      </button>
                      <button>
                        <img alt=" " src={VerticalIcon} />
                      </button>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        }
      </div>
    </LayOut>
  );
};
export default Gallery;
