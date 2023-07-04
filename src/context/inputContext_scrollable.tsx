import * as React from 'react';
import {InputContext} from '../components/Calc_main';
// import { Button } from 'react-bootstrap';
import { Props } from '../types/Props';
import { site_Input } from '../types/site_Input';
import Section from '../components/site_modals/section';
import CardContent from '@mui/joy/CardContent/CardContent';
import { Box, Card, CardCover, Typography } from '@mui/joy';
import { amountQuality_riskArray, designMethod_riskArray, expSimilar_riskArray, extentGround_riskArray, geoComplex_riskArray, levelConstruct_riskArray, levelPerformance_riskArray, methodAssessment_riskArray, methodUtilize_riskArray } from '../viewModels/riskFactors';
import Button from '@mui/joy/Button';
import { Divider, Grid } from '@mui/material';
import Redundancy_section from '../components/site_modals/redundancy_section';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

///create a provider for InputContext that sets the state of the site_Input object and passes it to the context provider for use in the app
export const InputProvider_Scrollable = (props: any) => {
    const [Input, set_Input] = React.useState(React.useContext(InputContext));   
    
    function testAPI(){
      /// create get request to http://localhost:5000/test
      fetch('http://localhost:5000/test')
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(rejected => {
          alert(rejected);
      });    
      /// create post request to http://localhost:5000/test
      // fetch('http://localhost:5000/test', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(Input),
      // }).then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
    }    
    function calculate_GRF(){
      ///create a post request to http://localhost:5000/calculate_grf with the props.state object as the body
      fetch('http://localhost:5000/calculate_grf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        },
        body: JSON.stringify(Input)
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
    return (
      <Card>
          {/* <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={9} md={9} lg={9}>
                <Typography level="h1" fontSize="sm">
                  RISK FACTOR
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
              <Typography level="h1" fontSize="sm">
                  Indiviual Risk Rating
              </Typography>           
            </Grid>
          </Grid>
          <Card sx={{maxHeight : '400px', overflowY: 'scroll'}}>
          <Typography level="h5" variant="soft" color="primary">
            SITE
          </Typography>
          <InputContext.Provider value={Input}>
              <Section
                setState={set_Input}
                state={Input}
                factor={"geoComplex"}
                riskArray={geoComplex_riskArray}
                title={"Geological complexity of site"}
                header={"Geological complexity of site"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"extentGround"}
                riskArray={extentGround_riskArray}
                title={"Extent of ground investigation"}
                header={"Extent of ground investigation"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"amountQuality"}
                riskArray={amountQuality_riskArray}
                title={"Amount and quality of ground investigation"}
                header={"Amount and quality of ground investigation"}
              />
          </InputContext.Provider>

          <Typography level="h5" variant="soft" color="primary">
            DESIGN
          </Typography>
          <InputContext.Provider value={Input}>
              <Section
                setState={set_Input}
                state={Input}
                factor={"expSimilar"}
                riskArray={expSimilar_riskArray}
                title={"Experience with similar foundations in similar geological conditions"}
                header={"Experience with similar foundations in similar geological conditions"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"methodAssessment"}
                riskArray={methodAssessment_riskArray}
                title={"Method of assessment of geotechnical parameters for design"}
                header={"Method of assessment of geotechnical parameters for design"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"designMethod"}
                riskArray={designMethod_riskArray}
                title={"Design method adopted"}
                header={"Design method adopted"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"methodUtilize"}
                riskArray={methodUtilize_riskArray}
                title={"Method of utilising results of in-situ test data and installation data"}
                header={"Method of utilising results of in-situ test data and installation data"}
              />
          </InputContext.Provider>

          <Typography level="h5" variant="soft" color="primary">
            INSTALLATION
          </Typography>
          <InputContext.Provider value={Input}>
              <Section
                setState={set_Input}
                state={Input}
                factor={"levelConstruct"}
                riskArray={levelConstruct_riskArray}
                title={"Level of construction control"}
                header={"Level of construction control"}
              />
              <Divider/>
              <Section
                setState={set_Input}
                state={Input}
                factor={"levelPerformance"}
                riskArray={levelPerformance_riskArray}
                title={"Level of performance monitoring of the supported structure during and after construction"}
                header={"Level of performance monitoring of the supported structure during and after construction"}
              />
              <Divider/>
              <Redundancy_section
                setState={set_Input} state={Input}/>
          </InputContext.Provider>
          </Card>
          <Card color="success" sx={{background:"success"}}>

          <CardCover         sx={{
            ///make a cardcover that is in the back
            position: 'absolute',
          background:
            'rgb(119,236,149)',
        }}>
        </CardCover>            
            <Box
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, zIndex: 1 }}
            >
              <Typography fontWeight="bold" fontSize="xl" sx={{color:'var(--joy-palette-common-white, #FFF)'}}
                // startDecorator={
                //   <Box
                //     component="span"
                //     sx={{
                //       bgcolor: 'neutral.400',
                //       width: '0.5em',
                //       height: '0.5em',
                //       borderRadius: '50%',
                //     }}
                //   />
                // }
              >
                GRF
              </Typography>

              <Typography
                fontSize="xl4"
                lineHeight={1}
                // startDecorator={
                //   <Typography fontSize="lg" textColor="text.secondary">
                //     $
                //   </Typography>
                // }
                sx={{ alignItems: 'flex-start' , color:'var(--joy-palette-common-white, #FFF)', fontWeight: 'bold'}}
              >
                0.76
              </Typography>

              <Typography
                level="body2"
                startDecorator={<InfoOutlinedIcon />}
                sx={{ alignItems: 'flex-start', maxWidth: 240, wordBreak: 'break-all' , color:'var(--joy-palette-common-white, #FFF)'}}
              >
                Very Low
              </Typography>
            </Box>
          </Card>  
                
          <Typography>
            <Button onClick={() => {
                calculate_GRF();
              }
            }>
              log
            </Button>
          </Typography>             
        </CardContent> */}
      </Card>           
    )
}

// public RiskFactorGroup Design()
// {
//     var ret = new RiskFactorGroup();
//     ret.GroupName = "DESIGN";
//     ret.Add(ExpSimilar());
//     ret.Add(MethodAssessment());
//     ret.Add(DesignMethod());
//     ret.Add(MethodUtilize());
//     return ret;
// }

// public RiskFactor ExpSimilar()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Experience with similar foundations in similar geological conditions";
//     ret.Id = 3;
//     ret.CalcValue = 0;
//     ret.FixedFactor = 1;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Extensive" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Limited" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "None" },
//     };
//     return ret;
// }


// public RiskFactor MethodAssessment()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Method of assessment of geotechnical parameters for design";
//     ret.Id = 4;
//     ret.CalcValue = 0;
//     ret.FixedFactor = 2;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Based on appropriate laboratory or in-situ tests or relevant existing pile load test data" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Based on site-specific correlations or on conventional laboratory or in-situ testing" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Based on non-site-specific correlations with (for example) SPT data" },
//     };
//     return ret;
// }

// public RiskFactor DesignMethod()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Design method adopted";
//     ret.Id = 5;
//     ret.CalcValue = 0;
//     ret.FixedFactor = 1;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Well-established and soundly based method or methods" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Simplified methods with well-established basis" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Simple empirical methods or sophisticated methods that are not well established" },
//     };
//     return ret;
// }

// public RiskFactor MethodUtilize()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Method of utilising results of in-situ test data and installation data";
//     ret.Id = 6;
//     ret.CalcValue = 0;
//     ret.FixedFactor = 2;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Design values based on minimum measured values on piles loaded to failure" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Design methods based on average values" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Design values based on maximum measured values on test piles loaded up only to working load, or indirect measurements used during installation, and not calibrated to static loading tests" },
//     };
//     return ret;
// }

// public RiskFactorGroup Installation()
// {
//     var ret = new RiskFactorGroup();
//     ret.GroupName = "INSTALLATION";
//     ret.Add(LevelContsruct());
//     ret.Add(LevelPerformance());

//     return ret;
// }

// public RiskFactor LevelContsruct()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Level of construction control";
//     ret.Id = 7;
//     ret.CalcValue = 0;
//     ret.FixedFactor = 2;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Detailed with professional geotechnical supervision, construction processes that are well established and relatively straightforward" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Limited degree of professional geotechnical involvement in supervision, conventional construction procedures" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Very limited or no involvement by designer, construction processes that are not well established or complex" },
//     };
//     return ret;
// }

// public RiskFactor LevelPerformance()
// {
//     RiskFactor ret = new RiskFactor();
//     ret.Factor = "Level of performance monitoring of the supported structure during and after construction";
//     ret.Id = 8;
//     ret.CalcValue = 2.5;
//     ret.FixedFactor = 0.5;
//     ret.InputSelections = new List<InputSelection<double>>()
//     {
//         new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Detailed measurements of movements and pile loads" },
//         new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Correlation of installed parameters with on-site static load tests carried out in accordance with this Standard" },
//         new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//         new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "No monitoring" },
//     };
//     return ret;
// }