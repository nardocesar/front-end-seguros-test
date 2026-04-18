import {
  Heading,
  Text,
  Box,
  Button,
  Stack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FormikErrors } from "formik/dist/types";

import DanosEletricosIcon from "../../assets/icons/danos-eletricos";
import { FormFields, InsuranceCoverageItem } from "../../models/entities";

import RadioButtonComponent from "../radio-group/radio-button";

const InsuranceCoverageComponent = ({
  nextStep,
  indexToShow,
  steps,
  setFieldValue,
  value,
}: {
  nextStep: () => void;
  indexToShow: number;
  steps: Array<InsuranceCoverageItem>;
  value: FormFields;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormFields>>;
}) => {
  return (
    <>
      {indexToShow === 0 && (
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Escolha suas coberturas
          </Heading>
          <Text as="p" color="gray" fontSize="sm">
            Cobertura é o que garante que você vai receber a indenização em caso
            de perdas ou danos, e o mais legal é que você pode personalizar tudo
            durante a contratação.
          </Text>
          <Box height="32px"></Box>
          <Text as="h4" color="gray" fontSize="lg">
            agora que você já sabe o que são coberturas, que tal selecionar as
            suas?
          </Text>
          <Box height="16px"></Box>
          <Button onClick={nextStep} colorScheme="orange">
            escolher coberturas
          </Button>
        </Box>
      )}

      {steps.map((item, _index) => {
        const fieldName = `coverage${_index + 1}` as keyof FormFields;

        return indexToShow === _index + 1 ? (
          <Box key={_index} textAlign="center">
            {item.icon && (
              <Center as="figure">
                <Icon as={item.icon} maxH="100px" />
              </Center>
            )}
            <Box height="16px"></Box>
            <Heading as="h2" size="md">
              {item.title}
            </Heading>
            <Text as="p" color="gray" fontSize="sm">
              {item.description}
            </Text>
            <Box height="16px"></Box>
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justifyContent="center"
            >
              {item.options.map((option, _i) => {
                return (
                  <RadioButtonComponent
                    key={_i}
                    label={option.label}
                    value={option.value}
                    checked={option.value === value[fieldName]}
                    radioSize="sm"
                    onChange={() => {
                      setFieldValue(fieldName, option.value);
                      nextStep();
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        ) : null;
      })}
    </>
  );
};

export default InsuranceCoverageComponent;
