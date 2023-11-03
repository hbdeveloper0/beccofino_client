import Footer from "../../components/footer/Footer";
import SubSlider from "../../components/SubSlider/SubSlider";
import Navbar from "../../components/navbar/Navbar";
import ContactImg from "../../../assets/images/contact/Contact-header.jpg";

import navLogo from "../../../assets/images/logos/navLogoBlack.png";
import ImgSection from "./ImgSection";
import { Grid } from "@mui/material";
import FormSection from "./FormSection";
import MapSection from "./MapSection";

const Contact = () => {
  return (
    <Grid>
      <Navbar logo={navLogo} bgColor={"#f0edea"} textColor={"#111010"} />
      <SubSlider img={ContactImg} name="Contact" />
      <Grid sx={{background:"#f0edea"}}>
        <ImgSection  />
      </Grid>

     <Grid  sx={{background:"#20232e",pt:5}}>
        <FormSection/>
    </Grid>
     <Grid  sx={{background:"#FFFF",pt:5}}>
        <MapSection/>
    </Grid>
      <Footer />
    </Grid>
  );
};

export default Contact;
