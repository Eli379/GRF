import * as React from "react";
import { InputContext } from "../components/Calc_main";
import Section from "../components/site_modals/section";
import CardContent from "@mui/joy/CardContent/CardContent";
import { Box, Card, CardCover, Typography } from "@mui/joy";
import {
  amountQuality_riskArray,
  designMethod_riskArray,
  expSimilar_riskArray,
  extentGround_riskArray,
  geoComplex_riskArray,
  levelConstruct_riskArray,
  levelPerformance_riskArray,
  methodAssessment_riskArray,
  methodUtilize_riskArray,
} from "../viewModels/riskFactors";
import Button from "@mui/joy/Button";
import { Divider, Grid, Tab, Tabs } from "@mui/material";
import Redundancy_section from "../components/site_modals/redundancy_section";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

///create a provider for InputContext that sets the state of the site_Input object and passes it to the context provider for use in the app
export const InputProvider_TabVersion = (props: any) => {
  const [Input, set_Input] = React.useState(React.useContext(InputContext));

  const [tab, setTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  function testAPI() {
    /// create get request to http://localhost:5000/test
    fetch("http://localhost:5000/test")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((rejected) => {
        alert(rejected);
      });
  }
  function calculate_GRF() {
    ///create a post request to http://localhost:5000/calculate_grf with the props.state object as the body
    fetch("http://localhost:5000/calculate_grf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      body: JSON.stringify(Input),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // props.setState(data);
      })
      .catch((rejected) => {
        alert(rejected);
      });
  }

  return (
    <Card sx={{width: '650px'}}>
      {/* <CardContent>
        <Card>
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
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tab}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="SITE" {...a11yProps(0)} />
              <Tab label="DESIGN" {...a11yProps(1)} />
              <Tab label="INSTALLATION" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={tab} index={0}>
              <InputContext.Provider value={Input}>
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"geoComplex"}
                  riskArray={geoComplex_riskArray}
                  title={"Geological complexity of site"}
                  header={"Geological complexity of site"}
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"extentGround"}
                  riskArray={extentGround_riskArray}
                  title={"Extent of ground investigation"}
                  header={"Extent of ground investigation"}
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"amountQuality"}
                  riskArray={amountQuality_riskArray}
                  title={"Amount and quality of ground investigation"}
                  header={"Amount and quality of ground investigation"}
                />
              </InputContext.Provider>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <InputContext.Provider value={Input}>
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"expSimilar"}
                  riskArray={expSimilar_riskArray}
                  title={
                    "Experience with similar foundations in similar geological conditions"
                  }
                  header={
                    "Experience with similar foundations in similar geological conditions"
                  }
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"methodAssessment"}
                  riskArray={methodAssessment_riskArray}
                  title={
                    "Method of assessment of geotechnical parameters for design"
                  }
                  header={
                    "Method of assessment of geotechnical parameters for design"
                  }
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"designMethod"}
                  riskArray={designMethod_riskArray}
                  title={"Design method adopted"}
                  header={"Design method adopted"}
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"methodUtilize"}
                  riskArray={methodUtilize_riskArray}
                  title={
                    "Method of utilising results of in-situ test data and installation data"
                  }
                  header={
                    "Method of utilising results of in-situ test data and installation data"
                  }
                />
              </InputContext.Provider>
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <InputContext.Provider value={Input}>
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"levelConstruct"}
                  riskArray={levelConstruct_riskArray}
                  title={"Level of construction control"}
                  header={"Level of construction control"}
                />
                <Divider />
                <Section
                  setState={set_Input}
                  state={Input}
                  factor={"levelPerformance"}
                  riskArray={levelPerformance_riskArray}
                  title={
                    "Level of performance monitoring of the supported structure during and after construction"
                  }
                  header={
                    "Level of performance monitoring of the supported structure during and after construction"
                  }
                />
              </InputContext.Provider>
            </TabPanel>
          </Box>
        </Card>
        <InputContext.Provider value={Input}>
            <Redundancy_section setState={set_Input} state={Input} />
          </InputContext.Provider>        
        <Card color="success" sx={{ background: "success" }}>
          <CardCover
            sx={{
              ///make a cardcover that is in the back
              position: "absolute",
              background: "rgb(119,236,149)",
            }}
          ></CardCover>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              zIndex: 1,
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="xl"
              sx={{ color: "var(--joy-palette-common-white, #FFF)" }}
            >
              GRF
            </Typography>

            <Typography
              fontSize="xl4"
              lineHeight={1}
              sx={{
                alignItems: "flex-start",
                color: "var(--joy-palette-common-white, #FFF)",
                fontWeight: "bold",
              }}
            >
              0.76
            </Typography>

            <Typography
              level="body2"
              startDecorator={<InfoOutlinedIcon />}
              sx={{
                alignItems: "flex-start",
                maxWidth: 240,
                wordBreak: "break-all",
                color: "var(--joy-palette-common-white, #FFF)",
              }}
            >
              Very Low
            </Typography>
          </Box>
        </Card>

        <Typography>
          <Button
            onClick={() => {
              calculate_GRF();
            }}
          >
            log
          </Button>
        </Typography>
      </CardContent> */}
    </Card>
  );
};
