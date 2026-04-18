import {
  CustomRadioCheckmark,
  CustomRadioInput,
  CustomRadioLabel,
} from "./styles";

const RadioButtonComponent = (
  props: React.InputHTMLAttributes<any> & { label: string }
) => {
  return (
    <CustomRadioLabel>
      <CustomRadioInput {...props} />
      <CustomRadioCheckmark
        checked={Boolean(props.checked)}
        onClick={props.onChange}
      >
        {props.label}
      </CustomRadioCheckmark>
    </CustomRadioLabel>
  );
};

export default RadioButtonComponent;
