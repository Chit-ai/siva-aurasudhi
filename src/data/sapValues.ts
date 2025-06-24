
// SAP Values for oils with sacred properties
export const SAP_VALUES = {
  olive: 0.134,
  coconut: 0.191,
  almond: 0.136,
  palm: 0.141,
  avocado: 0.133,
  shea: 0.128,
  sesame: 0.133,
  neem: 0.139
} as const;

export type OilType = keyof typeof SAP_VALUES;
