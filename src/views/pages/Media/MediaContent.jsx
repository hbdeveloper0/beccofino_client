import React, { useState } from "react";
import { Grid, Box, CardMedia } from "@mui/material";
import { Container } from "react-bootstrap";
import knifeIcon from "../../../assets/images/mediaPage/fav-150x150.png";
import GlobelButton from "../../components/GlobalButton/GlobelButton";

import Img1 from "../../../assets/images/mediaPage/contentImages/Img1.jpg";
import Img2 from "../../../assets/images/mediaPage/contentImages/Img2.jpg";
import Img3 from "../../../assets/images/mediaPage/contentImages/Img3.jpg";
import Img4 from "../../../assets/images/mediaPage/contentImages/Img4.jpg";
import Img5 from "../../../assets/images/mediaPage/contentImages/Img5.jpg";
import Img6 from "../../../assets/images/mediaPage/contentImages/Img6.jpg";
import Img7 from "../../../assets/images/mediaPage/contentImages/Img7.jpg";
import Img8 from "../../../assets/images/mediaPage/contentImages/Img8.jpg";
import Img9 from "../../../assets/images/mediaPage/contentImages/Img9.jpg";
import Img10 from "../../../assets/images/mediaPage/contentImages/Img10.jpg";
import Img11 from "../../../assets/images/mediaPage/contentImages/Img11.jpg";
import Img12 from "../../../assets/images/mediaPage/contentImages/Img12.jpg";
import Img13 from "../../../assets/images/mediaPage/contentImages/Img13.jpg";
import Img14 from "../../../assets/images/mediaPage/contentImages/Img14.jpg";
import Img15 from "../../../assets/images/mediaPage/contentImages/Img15.jpg";
import Img16 from "../../../assets/images/mediaPage/contentImages/Img16.jpg";
import Img17 from "../../../assets/images/mediaPage/contentImages/Img17.jpg";
import Img18 from "../../../assets/images/mediaPage/contentImages/Img18.jpg";
import Img19 from "../../../assets/images/mediaPage/contentImages/Img19.jpg";
import Img20 from "../../../assets/images/mediaPage/contentImages/Img20.jpg";
import Img21 from "../../../assets/images/mediaPage/contentImages/Img21.jpg";
import Img22 from "../../../assets/images/mediaPage/contentImages/Img22.jpg";
import Img23 from "../../../assets/images/mediaPage/contentImages/Img23.jpg";
import Img24 from "../../../assets/images/mediaPage/contentImages/Img24.jpg";
import Img25 from "../../../assets/images/mediaPage/contentImages/Img25.jpg";
import Img26 from "../../../assets/images/mediaPage/contentImages/Img26.jpg";
import Img27 from "../../../assets/images/mediaPage/contentImages/Img27.jpg";
import Img28 from "../../../assets/images/mediaPage/contentImages/Img28.jpg";

const Images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
];

const MediaContent = () => {
  const [displayedImages, setDisplayedImages] = useState(8);

  const loadMoreImages = () => {
    setDisplayedImages(displayedImages + 8);
  };
  return (
    <div>
      <Grid sx={{ pt: 5, pb: "70px", backgroundColor: "#f0edea" }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <CardMedia
              data-aos="fade-left"
                sx={{ width: "100px",position: 'relative', top: 50, left: {xs:126,sm:300,md:400,lg:500} }}
                component="img"
                alt="green iguana"
                image={knifeIcon}
              />

              {/* <img src={knifeIcon} alt='icon' height={100}  style={{ position: 'relative', top: 50, left: 500}}/> */}
              <hr data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2500" color="#bdb7b2" />
            </Grid>
          </Grid>

          <Grid  data-aos="fade-up"
          data-aos-duration="3000" container spacing={2} sx={{ mt: 4 }}>
            {Images.slice(0, displayedImages).map((Image) => (
              <Grid data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" item xs={12} sm={6} md={3}>
                <img
                className="img-fluid"
                  src={Image}
                  alt="Img"
                  style={{ height: 200, width: "99%",objectFit:"cover" }}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <GlobelButton
              onClick={() => loadMoreImages()}
              value={"Load More"}
            />
          </Box>
        </Container>
      </Grid>
    </div>
  );
};

export default MediaContent;
