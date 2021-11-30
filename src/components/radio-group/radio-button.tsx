import {
  CustomRadioCheckmark,
  CustomRadioInput,
  CustomRadioLabel,
} from "./styles";

const RadioButtonComponent = (
  props: React.InputHTMLAttributes<any> & {
    label: string;
    radioSize?: "sm" | "lg";
  }
) => {
  return (
    <CustomRadioLabel radioSize={props.radioSize ?? "lg"}>
      <CustomRadioInput {...props} />
      <CustomRadioCheckmark
        checked={Boolean(props.checked)}
        radioSize={props.radioSize ?? "lg"}
        onClick={props.onChange}
      >
        {props.label}
      </CustomRadioCheckmark>
    </CustomRadioLabel>
  );
};

export default RadioButtonComponent;
