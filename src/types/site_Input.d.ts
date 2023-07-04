import { InputContext, redundancy } from '../Calc_site';

export interface site_Input{
  geoComplex : number;
  extentGround : number;
  amountQuality : number;
  expSimilar: number;
  methodAssessment: number;
  designMethod: number;
  methodUtilize: number;
  levelConstruct: number;
  levelPerformance: number;
  redundancy: redundancy;
}

export type siteContextType = {
  siteInput: site_Input;
  saveSiteInput: (siteInput: site_Input) => void;
  updateSiteInput: (value: site_Input) => void;
};