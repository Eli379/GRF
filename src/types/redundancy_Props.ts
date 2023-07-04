import { grf } from "./grf";
import { risk } from "./risk";
import { site_Input } from "./site_Input";

export type redundancy_Props = {
  setState: React.Dispatch<React.SetStateAction<site_Input>>;
  setGRF: React.Dispatch<React.SetStateAction<grf>>;
  state: site_Input | null;
};