import React from "react";
import { site_Input } from "../types/site_Input";
import Calc_Site from "./Calc_main";
import { grf } from "../types/grf";
import { InputProvider } from "../context/inputContext";
import { InputProvider_TabVersion } from "../context/inputContext_tabs";
import { InputProvider_Scrollable } from "../context/inputContext_scrollable";
///create context called InputContext intialize to all zero
export const InputContext = React.createContext<site_Input>({
  geoComplex: 0,
  extentGround : 0,
  amountQuality : 0,
  expSimilar: 0,
  methodAssessment: 0,
  designMethod: 0,
  methodUtilize: 0,
  levelConstruct: 0,
  levelPerformance: 0,
  redundancy : 0
});

export const grfContext = React.createContext<grf>({
  value: 0.76,
  string: "Very Low",
});

/// create an object called redundancy that has low and high
export const redundancy = {
  low: 0,
  high: 1
};

const Calc_main = () => {
  return (
    <InputProvider/>
    // <InputProvider_Scrollable/>
  );
}

export default Calc_main;

