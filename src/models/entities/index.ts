interface Option {
  label: string;
  value: string | number;
}

export interface InsuranceCoverageItem {
  icon?: () => JSX.Element;
  title: string;
  description: string;
  options: Array<Option>;
}

export interface FormFields {
  question1: number;
  question2: number;
  question3: number;
  question4: number;
  question5: number;
  coverage1: "sim" | "não";
  coverage2: "sim" | "não";
  coverage3: "sim" | "não";
  coverage4: "sim" | "não";
  coverage5: "sim" | "não";
  coverage6: "sim" | "não";
  coverage7: "sim" | "não";
  coverage8: "sim" | "não";
  coverage9: "sim" | "não";
  coverage10: "sim" | "não";
  coverage11: "sim" | "não";
  coverage12: "sim" | "não";
  coverage13: "sim" | "não";
}
