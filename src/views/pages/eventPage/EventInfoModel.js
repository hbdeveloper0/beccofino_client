import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import PhoneInput from "react-phone-input-2";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function EventInfoModel({dialog,closeDialog}) {
  

  return (
    <React.Fragment>
   
      <BootstrapDialog
        onClose={closeDialog}
        aria-labelledby="customized-dialog-title"
        open={dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Your Information
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={closeDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Grid sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>
              <span style={{ color: "red" }}>*</span>First Name:
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="First Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>Last Name:</Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Last Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>
              <span style={{ color: "red" }}>*</span>Email:
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Email"
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
              placeholder="Zip Code"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>
              <span style={{ color: "red" }}>*</span>Credit Card Number:
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Credit Card Number"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>
              <span style={{ color: "red" }}>*</span>Card Expiry:
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="Card Expiry"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ pb: 1 }}>
              <span style={{ color: "red" }}>*</span>CSV:
            </Typography>
            <TextField
              fullWidth
              id="outlined-email-address"
              placeholder="CSV"
            />
          </Grid>
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions>
        <Button
        onClick={closeDialog}
        sx={{
          border: "1px solid #68747b",
          color: "#68747b",
          textTransform: "none",
          mr: 2,
        }}
      >
        Close
      </Button>
          <Button  
           sx={{
            backgroundColor: "#ed1d24",
            color: "#FFFFFF",
            textTransform: "none",
            px: 3,
          }} 
          onClick={closeDialog}>
           Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
