import React from "react";
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
const Gallery = () => {
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {List.map((itme, index) => {
              return (
                <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                  <div key={index} className="gallery-list">
                    <img src={itme} />
                    <div>
                      <button id="download-button">
                        <a href={itme} download>
                          <img src={DownloadIcon} />
                          M3.png
                        </a>
                      </button>
                      <button>
                        <img src={VerticalIcon} />
                      </button>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </LayOut>
  );
};
export default Gallery;
