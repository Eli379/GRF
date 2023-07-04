import { risk } from '../types/risk';
            /////SITE//////
export const geoComplex_riskArray: risk[] = [
    {
        RiskDescription : 'Horizontal strata, well-defined soil and rock characteristics',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Some variability over site, but without abrupt changes in stratigraphy',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Highly variable profile or presence of karstic features or steeply dipping rock levels or faults present on site, or combinations of these',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
///recreate the riskArray for the extentGround
export const extentGround_riskArray: risk[] = [
    {
        RiskDescription : 'Extensive drilling investigation covering whole site to an adequate depth',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription: 'Some boreholes extending at least 5 pile diameters below the base of the proposed pile foundation level',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Very limited investigation with few shallow boreholes',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
///recreate the riskArray for the amountQuality
export const amountQuality_riskArray: risk[] = [
    {
        RiskDescription : 'Detailed information on strength compressibility of the main strata',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'CPT probes over full depth of proposed piles or boreholes confirming rock as proposed foundating level for piles',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Limited amount of simple in-situ testing (e.g. SPT) or index tests only',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
            /////DESIGN//////
///recreate the riskArray for expSimilar
export const expSimilar_riskArray: risk[] = [
    {
        RiskDescription : 'Extensive',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Limited',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'None',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
///recreate the riskArray for methodAssessment
export const methodAssessment_riskArray: risk[] = [
    {
        RiskDescription : 'Based on appropriate laboratory or in-situ tests or relevant existing pile load test data',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Based on site-specific correlations or on conventional laboratory or in-situ testing',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Based on non-site-specific correlations with (for example) SPT data',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
///recreate the riskArray for designMethod
export const designMethod_riskArray: risk[] = [
    {
        RiskDescription : 'Well-established and soundly based method or methods',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Simplified methods with well-established basis',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Simple empirical methods or sophisticated methods that are not well established',
        Risk : 'Very high risk',
        UserInput : 5
    }  
]
//recreate the riskArray for methodUtilize
export const methodUtilize_riskArray: risk[] = [
    {
        RiskDescription : 'Design values based on minimum measured values on piles loaded to failure',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Design methods based on average values',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Design values based on maximum measured values on test piles loaded up only to working load, or indirect measurements used during installation, and not calibrated to static loading tests',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
            /////INSTALLATION//////
///recreate the riskArray for levelConstruct
export const levelConstruct_riskArray: risk[] = [
    {
        RiskDescription : 'Detailed with professional geotechnical supervision, construction processes that are well established and relatively straightforward',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Limited degree of professional geotechnical involvement in supervision, conventional construction procedures',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'Very limited or no involvement by designer, construction processes that are not well established or complex',
        Risk : 'Very high risk',
        UserInput : 5
    }
]
///recreate the riskArray for levelPerformance
export const levelPerformance_riskArray: risk[] = [
    {
        RiskDescription : 'Detailed measurements of movements and pile loads',
        Risk : 'Very low risk',
        UserInput : 1
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 2
    },
    {
        RiskDescription : 'Correlation of installed parameters with on-site static load tests carried out in accordance with this Standard',
        Risk : 'Moderate risk',
        UserInput : 3
    },
    {
        RiskDescription : '',
        Risk : '',
        UserInput : 4
    },
    {
        RiskDescription : 'No monitoring',
        Risk : 'Very high risk',
        UserInput : 5
    }
]


// #region Initializations
//         private void Initialize()
//         {
//             SelectedRedundancy = 0;
//             RiskFactors = new ObservableCollection<RiskFactorGroup>();
//             RiskFactors.Add(Site());
//             RiskFactors.Add(Design());
//             RiskFactors.Add(Installation());
//         }
//         public RiskFactorGroup Site()
//         {
//             var ret = new RiskFactorGroup();
//             ret.GroupName = "SITE";
//             ret.Add(GeoComplex());
//             ret.Add(ExtentGround());
//             ret.Add(AmountQuality());
//             return ret;
//         }

//         public RiskFactor GeoComplex()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Geological complexity of site";
//             ret.Id = 0;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Horizontal strata, well-defined soil and rock characteristics" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Some variability over site, but without abrupt changes in stratigraphy" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Highly variable profile or presence of karstic features or steeply dipping rock levels or faults present on site, or combinations of these" },
//             };
//             return ret;
//         }

//         public RiskFactor ExtentGround()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Extent of ground investigation";
//             ret.Id = 1;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Extensive drilling investigation covering whole site to an adequate depth" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Some boreholes extending at least 5 pile diameters below the base of the proposed pile foundation level" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Very limited investigation with few shallow boreholes" },
//             };
//             return ret;
//         }

//         public RiskFactor AmountQuality()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Amount and quality of geotechnical data";
//             ret.Id = 2;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Detailed information on strength compressibility of the main strata" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "CPT probes over full depth of proposed piles or boreholes confirming rock as proposed foundating level for piles" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Limited amount of simple in-situ testing (e.g. SPT) or index tests only" },
//             };
//             return ret;
//         }


//         public RiskFactorGroup Design()
//         {
//             var ret = new RiskFactorGroup();
//             ret.GroupName = "DESIGN";
//             ret.Add(ExpSimilar());
//             ret.Add(MethodAssessment());
//             ret.Add(DesignMethod());
//             ret.Add(MethodUtilize());
//             return ret;
//         }

//         public RiskFactor ExpSimilar()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Experience with similar foundations in similar geological conditions";
//             ret.Id = 3;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 1;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Extensive" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Limited" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "None" },
//             };
//             return ret;
//         }


//         public RiskFactor MethodAssessment()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Method of assessment of geotechnical parameters for design";
//             ret.Id = 4;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Based on appropriate laboratory or in-situ tests or relevant existing pile load test data" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Based on site-specific correlations or on conventional laboratory or in-situ testing" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Based on non-site-specific correlations with (for example) SPT data" },
//             };
//             return ret;
//         }

//         public RiskFactor DesignMethod()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Design method adopted";
//             ret.Id = 5;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 1;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Well-established and soundly based method or methods" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Simplified methods with well-established basis" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Simple empirical methods or sophisticated methods that are not well established" },
//             };
//             return ret;
//         }

//         public RiskFactor MethodUtilize()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Method of utilising results of in-situ test data and installation data";
//             ret.Id = 6;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Design values based on minimum measured values on piles loaded to failure" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Design methods based on average values" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Design values based on maximum measured values on test piles loaded up only to working load, or indirect measurements used during installation, and not calibrated to static loading tests" },
//             };
//             return ret;
//         }

//         public RiskFactorGroup Installation()
//         {
//             var ret = new RiskFactorGroup();
//             ret.GroupName = "INSTALLATION";
//             ret.Add(LevelContsruct());
//             ret.Add(LevelPerformance());

//             return ret;
//         }

//         public RiskFactor LevelContsruct()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Level of construction control";
//             ret.Id = 7;
//             ret.CalcValue = 0;
//             ret.FixedFactor = 2;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Detailed with professional geotechnical supervision, construction processes that are well established and relatively straightforward" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Limited degree of professional geotechnical involvement in supervision, conventional construction procedures" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "Very limited or no involvement by designer, construction processes that are not well established or complex" },
//             };
//             return ret;
//         }

//         public RiskFactor LevelPerformance()
//         {
//             RiskFactor ret = new RiskFactor();
//             ret.Factor = "Level of performance monitoring of the supported structure during and after construction";
//             ret.Id = 8;
//             ret.CalcValue = 2.5;
//             ret.FixedFactor = 0.5;
//             ret.InputSelections = new List<InputSelection<double>>()
//             {
//                 new InputSelection<double>() { UserInput = 1, Risk = "Very low risk", RiskDescription = "Detailed measurements of movements and pile loads" },
//                 new InputSelection<double>() { UserInput = 2, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 3, Risk = "Moderate risk", RiskDescription = "Correlation of installed parameters with on-site static load tests carried out in accordance with this Standard" },
//                 new InputSelection<double>() { UserInput = 4, RiskDescription = "" },
//                 new InputSelection<double>() { UserInput = 5, Risk = "Very high risk", RiskDescription = "No monitoring" },
//             };
//             return ret;
//         }