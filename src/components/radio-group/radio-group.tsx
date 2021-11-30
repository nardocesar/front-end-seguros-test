import { Box, Heading } from "@chakra-ui/react";
import { FormikErrors } from "formik/dist/types";
import { QuestionField } from "../../modules/form/form";
import RadioButtonComponent from "./radio-button";

export interface RadioButtonProps {
  label: string;
  value: number;
}

const RadioGroupComponent = ({
  title,
  name,
  options,
  fieldName,
  value,
  setFieldValue,
  nextStep,
}: {
  title: string;
  name: string;
  options: Array<RadioButtonProps>;
  fieldName: QuestionField;
  value: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          question1: number;
          question2: number;
          question3: number;
          question4: number;
          question5: number;
        }>
      >;
  nextStep: () => void;
}) => (
  <Box as="article" mt="12" mb="4" width="100%">
    <Heading as="h3" size="lg" textAlign="center">
      {title}
    </Heading>
    <Box
      mt="8"
      mb="8"
      width="100%"
      display="flex"
      justifyContent="space-around"
    >
      {options.map((item, _index) => (
        <RadioButtonComponent
          {...item}
          key={_index}
          name={name}
          checked={item.value === value}
          onChange={() => setFieldValue(fieldName, item.value)}
          onClick={nextStep}
        />
      ))}
    </Box>
  </Box>
);

export default RadioGroupComponent;
