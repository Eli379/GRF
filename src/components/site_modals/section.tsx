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
import { FormHelperText, Stack } from '@mui/material';
import { InputContext, grfContext } from '../Calc_main';
import { useContext } from 'react';
import { site_Input } from '../../types/site_Input';
import { Props } from '../../types/Props';
import { grf } from '../../types/grf';

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

const Section = (props : Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = ( event: any, reason: string ) => {
    if (reason && reason == "backdropClick") 
        return;
    setOpen(false)
  };
  ///recreate calculate_GRF function but in await async format
  async function awaitcalculate_GRF(){
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
      ///create a const called grf with a type of grf that has the value and string of the data object
      const grf : grf = {
        value: data.value,
        string: data.string
      }
      props.setGRF(grf);
    })
    .catch(rejected => {
        alert(rejected);
    });}


  function calculate_GRF(){
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
  
  function UpdateFactor(input: number){
    ///create a switch case to update the state of the site_Input object depending on the factor that is being updated
    switch(props.factor){
      case "geoComplex": props.setState(current => ({
        ...current,
        geoComplex: input
      })); break;
      case "extentGround": props.setState(current => ({
        ...current,
        extentGround: input
      })); break;
      case "amountQuality": props.setState(current => ({
        ...current,
        amountQuality: input
      })); break;
      case "design": props.setState(current => ({
        ...current,
        design: input
      })); break;
      case "expSimilar": props.setState(current => ({
        ...current,
        expSimilar: input
      })); break;
      case "methodAssessment": props.setState(current => ({
        ...current,
        methodAssessment: input
      })); break;
      case "designMethod": props.setState(current => ({
        ...current,
        designMethod: input
      })); break;
      case "methodUtilize": props.setState(current => ({
        ...current,
        methodUtilize: input
      })); break;
      case "installation": props.setState(current => ({
        ...current,
        installation: input
      })); break;
      case "levelConstruct": props.setState(current => ({
        ...current,
        levelConstruct: input
      })); break;
      case "levelPerformance": props.setState(current => ({
        ...current,
        levelPerformance: input
      })); break;
    }
    /// console log all values of props.state
    console.log(props.state);

    awaitcalculate_GRF();
    setOpen(false);
  }
  function returnStateStr(){
    ///create a switch case to return props.state property depending on the factor
    switch(props.factor){
      case "geoComplex": return props.state!.geoComplex;
      case "extentGround": return props.state!.extentGround;
      case "amountQuality": return props.state!.amountQuality;
      case "expSimilar": return props.state!.expSimilar;
      case "methodAssessment": return props.state!.methodAssessment;
      case "designMethod": return props.state!.designMethod;
      case "methodUtilize": return props.state!.methodUtilize;
      case "levelConstruct": return props.state!.levelConstruct;
      case "levelPerformance": return props.state!.levelPerformance;
    }
  }
  return (
    <div>
      <Grid container spacing={1}>
      <Grid item xs={9} md={9} lg={9} sx={{ my: "0.25rem" }}>
          <Typography level="h1" fontSize="sm">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={3} md={3} lg={3} sx={{ my: "0.25rem" }}>
        <Button
          color="warning"
          onClick={handleOpen}
          size="sm"
        >
          {returnStateStr()}
        </Button>             
        </Grid>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
            disableEscapeKeyDown={true}
          >
            <Fade in={open}>
              <div>
              <Card sx={css_style}>
                <FormLabel
                  id="label"
                  sx={{
                    mb: 2,
                    fontWeight: "xl",
                    textTransform: "uppercase",
                    fontSize: "xs",
                    letterSpacing: "0.15rem",
                  }}
                >
                  {props.header}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="label"
                  defaultValue="0"
                  size="sm"
                  sx={{ gap: 1.5 }}
                >
                  {props.riskArray.map((value) => (
                    <Sheet
                      key={value.RiskDescription}
                      sx={{
                        p: 2,
                        borderRadius: "md",
                        boxShadow: "sm",
                        bgcolor: "background.body",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={0}
                      >
                        <Grid container sx={{ my: "1.5rem" }}>
                          <Grid item xs={5}>
                            <Radio
                              label={`${value.RiskDescription}`}
                              overlay
                              disableIcon
                              value={value.UserInput}
                              onClick={() => {UpdateFactor(value.UserInput);}}
                              slotProps={{
                                label: ({ checked }) => ({
                                  sx: {
                                    fontWeight: "lg",
                                    fontSize: "sm",
                                    color: checked ? "text.primary" : "text.secondary",
                                  },
                                }),
                                action: ({ checked }) => ({
                                  sx: (theme) => ({
                                    ...(checked && {
                                      "--variant-borderWidth": "2px",
                                      "&&": {
                                        // && to increase the specificity to win the base :hover styles
                                        borderColor: theme.vars.palette.primary[500],
                                      },
                                    }),
                                  }),
                                }),
                              }}
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <FormHelperText>
                              <Button color="danger" variant="plain">
                                <b>{value.Risk}</b>
                              </Button>
                            </FormHelperText>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography level="h6" gutterBottom>
                              {value.UserInput}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Stack>
                    </Sheet>
                  ))}
                </RadioGroup>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mt={'1rem'}
                >
                  <Button onClick={function(){setOpen(false)}} variant="plain">CANCEL</Button>
                </Stack>                     
              </Card>;
              </div>
            </Fade>
        </Modal> 
      </Grid>
    </div>

  );
}

export default Section;