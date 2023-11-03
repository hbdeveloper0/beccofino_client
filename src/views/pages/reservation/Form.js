import PropTypes from "prop-types";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import Motion from "../../components/Motion";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Autocomplete,
  Button,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

// assets
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import Calender from "./Calender";

// tabs
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// tabs option
const tabsOption = [
  {
    label: "Menu Selection",
    icon: <CheckCircleIcon />,
    caption: "Menu Selection",
  },
  {
    label: "Date & Time",
    icon: <EventNoteIcon />,
    caption: "Date & Time",
  },
  {
    label: "Your Information",
    icon: <PersonOutlineTwoToneIcon />,
    caption: "Your Information",
  },
  {
    label: "Payments",
    icon: <PaymentIcon />,
    caption: "Payments",
  },
];
const top100Films = [
  { label: "The Dark Knight", id: 1 },
  { label: "Control with Control", id: 2 },
  { label: "Combo with Solo", id: 3 },
  { label: "The Dark", id: 4 },
  { label: "Fight Club", id: 5 },
  { label: "Fight Clubaaa", id: 6 },
  { label: "Pulp Fiction", id: 7 },
];

// ==============================|| PROFILE 2 ||============================== //

const Form = () => {
  const theme = useTheme();
  // const { borderRadius } = useConfig();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <Motion>
      <Container
        maxWidth="md"
        sx={{ background: "#ffff", p: "0px !important", borderRadius: "9px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} sx={{ pt: "0px !important" }}>
            <Grid>
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                sx={{
                  background: "#ed1d24",
                  color: "#FFFF",
                  borderRadius: "10px",
                  "& .MuiTabs-flexContainer": {
                    borderBottom: "none",
                  },
                  "& button": {
                    // color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[600],
                    minHeight: "auto",
                    minWidth: "100%",
                    py: 1.5,
                    px: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    color: "#FFFF",
                    // borderRadius: `${borderRadius}px`
                  },
                  "& button.Mui-selected": {
                    color: "red",
                    border: "none",
                    background:
                      theme.palette.mode === "dark"
                        ? theme.palette.dark.main
                        : theme.palette.grey[50],
                  },
                  "& button > svg": {
                    marginBottom: "0px !important",
                    marginRight: 1.25,
                    marginTop: 1.25,
                    height: 20,
                    width: 20,
                  },
                  "& button > div > span": {
                    display: "block",
                  },
                  "& > div > span": {
                    display: "none",
                  },
                }}
              >
                {tabsOption.map((tab, index) => (
                  <Tab
                    key={index}
                    icon={tab.icon}
                    label={
                      <Grid container direction="column">
                        <Typography variant="subtitle1" color="inherit">
                          {tab.label}
                        </Typography>
                        <Typography
                          component="div"
                          variant="caption"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {tab.caption}
                        </Typography>
                      </Grid>
                    }
                    {...a11yProps(index)}
                  />
                ))}
                <Grid sx={{ pt: 25 }}>
                  <Divider />
                  <Typography
                    sx={{ color: "#ffff", textAlign: "center", pt: 1 }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    sx={{ color: "#ffff", textAlign: "center", pt: 1 }}
                  >
                    +9200123456789
                  </Typography>
                  <Typography
                    sx={{ color: "#ffff", textAlign: "center", pt: 1, pb: 2 }}
                  >
                    info@BeccofinoTampa.com
                  </Typography>
                </Grid>
              </Tabs>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ p: "0px !important" }}>
            <Grid
              sx={{
                borderLeft: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.default
                    : theme.palette.grey[200],
                height: "100%",
              }}
            >
              <TabPanel value={value} index={0}>
                <Grid>
                  <Typography variant="h5" sx={{ p: 3, boxShadow: 2 }}>
                    Menu Selection
                  </Typography>
                </Grid>
                <Grid sx={{ p: 6 }}>
                  <Typography sx={{ pb: 1 }}>
                    <span style={{ color: "red" }}>*</span>Menu:
                  </Typography>
                  <Autocomplete
                    disablePortal
                    options={top100Films}
                    // defaultValue={top100Films[5]}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Menu" />
                    )}
                  />
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Calender />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid>
                  <Typography variant="h5" sx={{ p: 3, boxShadow: 2 }}>
                    Your Information
                  </Typography>
                </Grid>
                <Grid sx={{ p: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography sx={{ pb: 1 }}>
                        <span style={{ color: "red" }}>*</span>First Name:
                      </Typography>
                      <TextField
                        fullWidth
                        id="outlined-email-address"
                        placeholder="Email Address"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ pb: 1 }}>Last Name:</Typography>
                      <TextField
                        fullWidth
                        id="outlined-email-address"
                        placeholder="Email Address"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ pb: 1 }}>
                        <span style={{ color: "red" }}>*</span>Email:
                      </Typography>
                      <TextField
                        fullWidth
                        id="outlined-email-address"
                        placeholder="Email Address"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ pb: 1 }}>Phone:</Typography>
                      <PhoneInput
                        country="us"
                        value=""
                        inputProps={{
                          name: "phone",
                          required: true,
                        }}
                        inputStyle={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ pb: 1 }}>
                        <span style={{ color: "red" }}>*</span>Zip Code:
                      </Typography>
                      <TextField
                        fullWidth
                        id="outlined-email-address"
                        placeholder="Email Address"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Grid>
                  <Typography variant="h5" sx={{ p: 3, boxShadow: 2 }}>
                    Payments
                  </Typography>
                </Grid>
                <Grid sx={{ p: 4 }}>
                  <Typography sx={{ pb: 1 }}>Summary</Typography>
                  <Grid
                    sx={{
                      border: "1px solid #babfc3",
                      borderRadius: "11px",
                      p: 1.5,
                    }}
                  >
                    <Grid
                      sx={{
                        p: 1,
                        border: "1px solid #babfc3",
                        borderRadius: "11px",
                      }}
                    >
                      <Typography
                        variant="subsubtitle1"
                        sx={{ color: "#ced1d4" }}
                      >
                        Menu
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={10} sx={{ px: 5 }}>
                          Chef Table: 6 courses tasting menu ($150.00) x 2
                          people
                        </Grid>
                        <Grid item xs={2}>
                          $300.00
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ p: 2 }}>
                      <Grid item xs={10}>
                        <Typography sx={{ pl: 0.5 }}> Subtotal:</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        $300.00
                      </Grid>
                    </Grid>
                    <Divider sx={{ borderBottom: "1px dashed #ced1d4" }} />

                    <Grid container spacing={2} sx={{ p: 2 }}>
                      <Grid item xs={2}>
                        <Typography>Coupon:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Input
                          startDecorator={<AccountBalanceWalletIcon />}
                          size="sm"
                          placeholder="Type in here…"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          sx={{
                            background: "red",
                            color: "white",
                            ":hover": {
                              background: "white",
                              color: "red",
                              border: "1px solid red",
                            },
                          }}
                          size="xs"
                        >
                          Add
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ px: 1 }}>
                      <Grid item xs={10}>
                        <Typography sx={{ pl: 0.5 }}> Total Amount:</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>$300.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Typography sx={{ textAlign: "center", color: "#ced1d4" }}>
                  You will be redirected to the payment checkout.
                </Typography>
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <CardActions>
          <Grid container justifyContent="space-between" spacing={0}>
            <Grid item>
              {value > 0 && (
                // <AnimateButton>
                <Button
                  sx={{
                    background: "red",
                    color: "white",
                    ":hover": {
                      background: "white",
                      color: "red",
                      border: "1px solid red",
                    },
                  }}
                  size="large"
                  onClick={(e) => handleChange(e, value - 1)}
                >
                  Back
                </Button>
                // </AnimateButton>
              )}
            </Grid>
            <Grid item>
              {value < 3 && (
                // <AnimateButton>
                <Button
                  sx={{
                    background: "red",
                    color: "white",
                    ":hover": {
                      background: "white",
                      color: "red",
                      border: "1px solid red",
                    },
                  }}
                  size="large"
                  onClick={(e) => handleChange(e, 1 + value)}
                >
                  Continue
                </Button>
                // </AnimateButton>
              )}
              {value > 2 && (
                // <AnimateButton>
                <Button
                  onClick={() => navigate("/checkout")}
                  sx={{
                    background: "red",
                    color: "white",
                    ":hover": {
                      background: "white",
                      color: "red",
                      border: "1px solid red",
                    },
                  }}
                  size="large"
                >
                  save
                </Button>
                // </AnimateButton>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Container>
    </Motion>
  );
};

export default Form;
