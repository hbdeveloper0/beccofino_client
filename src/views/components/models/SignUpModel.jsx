
import react, {useState, useContext} from 'react'
import ModelContext from '../../../context/ModelContext';
import { Grid, Container, Box, Typography, Link, Button, Modal, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '20px 20px 100px 20px ',
    
};

const SignUpModel = () => {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState(null) 
    const a = useContext(ModelContext)
    const handleCloseModel = () => {
      a.setModelOpen(false)
      setMessage(null)
    };

    const handelSignup = async (e) =>{
      e.preventDefault()
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, {email})
        setMessage(response.data.data.message)
      } catch (error) {
        if (error.response) {
          if(error.response.status === 400){
            setMessage(error.response.data.message);
          }else{
            setMessage(error.response.data.validationErrors[0].message);
          }
          
        } else if (error.request) {
          console.log('No response received');
        } else {
          // Something happened in setting up the request
          console.error('Error:', error.message);
        }
      }
      
      // console.log(response)
    }

    return(
        // <Button onClick={handleOpen}>Open modal</Button>
      
      <Modal
          open={a.modelOpen}
          onClose={handleCloseModel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Button variant="text" onClick={() => handleCloseModel()} sx={{float: 'right'}}><CloseIcon sx={{color: '#111010'}}/></Button>
            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{fontSize: '32px', color: '#111010', fontFamily: "Marcellus Sans-serif", textAlign:'center', mt: 5}}>
              Subscribe to our Newsletter
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', fontSize: '16px', fontFamily: "Montserrat  Sans-serif", color: '#111010'}}>
              Stay Updated with our latest promotions!
            </Typography>

            <form onSubmit={handelSignup} style={{marginTop: '20px'}}>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <TextField InputProps={{
                  style:{
                          width: '330px',
                           height: '45px',
                            boxShadow: '0px 1px 3px lightgray'
                        },
                                           
                    }}
                     variant="outlined"
                    placeholder="Email Adress"
                    required
                    onChange={(e)=> setEmail(e.target.value)}/>

                <Button type='submit'  variant='contained' sx={{backgroundColor: '#ed1d24', borderRadius: '25px', padding: '10px 30px 10px 30px', ml: 4, ':hover':{backgroundColor: '#ed1d24'}}}>Sign up</Button>
                
                <br/>
                
              </Box>
              {message && <div className="error-message" style={{color: 'red', marginLeft: '140px'}}>{message}</div>}
            </form>
          </Box>
      </Modal>
    )
}

export default SignUpModel