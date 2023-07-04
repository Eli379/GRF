import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import  Divider from '@mui/material/Divider';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack } from '@mui/material';
import { InputContext, redundancy } from '../Calc_main';
import { useContext } from 'react';
import { site_Input } from '../../types/site_Input';
import { Props } from '../../types/Props';
import { redundancy_Props } from '../../types/redundancy_Props';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const css_style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  function calculate_GRF(props : redundancy_Props){
    ///create a post request to http://localhost:5000/calculate_grf with the props.state object as the body
    fetch('http://localhost:5000/calculate_grf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      },
      body: JSON.stringify(props.state)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // props.setState(data);
    })
    .catch(rejected => {
        alert(rejected);
    });      
  } 

export const Redundancy_section = (props : redundancy_Props) =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = ( event: any, reason?: string ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleChange = (event: SelectChangeEvent<typeof redundancy>) => {
    props.setState(current => ({
      ...current,
      redundancy: event.target.value
    }));
    calculate_GRF(props);
    setOpen(false);
  };
  
  function UpdateFactor(input: number){
    ///create a switch case to update the state of the site_Input object depending on the factor that is being updated
    switch(props.state){
    }
  }
  function returnStateStr(){
    ///create a switch case to return props.state property depending on the factor
    switch(props.state){

    }
  }
  return (
    <div>
          <Typography fontWeight={"xl"} sx={{ my: "0.75rem" }}>
              <Grid container spacing={1}>
                <Grid item xs={9}>LEVEL OF REDUNDANCY OF PILING SYSTEM</Grid>
                <Grid item xs={3}>
                  <Button
                    color="warning"
                    onClick={handleOpen}
                    // size="sm"
                  >
                    {props.state!.redundancy === 0 ? "LOW" : "HIGH"}
                  </Button>                   
                </Grid>
              </Grid>
          </Typography>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  // value={age}
                  onChange={handleChange}
                  defaultValue={props.state!.redundancy}
                >
                  <MenuItem value={0}>LOW</MenuItem>
                  <MenuItem value={1}>HIGH</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="plain">Cancel</Button>
          </DialogActions>
        </Dialog>          
    </div>

  );
}

export default Redundancy_section;