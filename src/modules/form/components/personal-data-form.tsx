import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";
import { FormikErrors } from "formik/dist/types";
import { FormFields } from "../../../models/entities";

const PersonalDataForm = ({
  indexToShow,
  nextStep,
  setFieldValue,
  values,
}: {
  indexToShow: number;
  nextStep: () => void;
  values: FormFields;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormFields>>;
}) => {
  switch (indexToShow) {
    case 0:
      return (
        <>
          <HStack align="flex-start">
            <FormControl id="name">
              <FormLabel>nome completo</FormLabel>
              <Input
                type="text"
                value={values.name}
                onChange={(event) => setFieldValue("name", event.target.value)}
              />
              <FormHelperText>sem abreviações</FormHelperText>
            </FormControl>
            <FormControl id="cpf">
              <FormLabel>cpf</FormLabel>
              <Input
                type="text"
                value={values.cpf}
                onChange={(event) => setFieldValue("cpf", event.target.value)}
              />
            </FormControl>
          </HStack>
          <Box height="16px" />
          <Center>
            <Button onClick={nextStep} type="button" colorScheme="orange">
              Próximo
            </Button>
          </Center>
        </>
      );
    case 1:
      return (
        <>
          <HStack align="flex-start">
            <FormControl id="birthdate">
              <FormLabel>data de nascimento</FormLabel>
              <Input
                type="text"
                value={values.birthdate}
                onChange={(event) =>
                  setFieldValue("birthdate", event.target.value)
                }
              />
            </FormControl>
            <FormControl id="cep">
              <FormLabel>cep da sua residência</FormLabel>
              <Input
                type="text"
                value={values.cep}
                onChange={(event) => setFieldValue("cep", event.target.value)}
              />
            </FormControl>
          </HStack>
          <Box height="16px" />
          <Center>
            <Button onClick={nextStep} type="button" colorScheme="orange">
              Próximo
            </Button>
          </Center>
        </>
      );
    case 2:
      return (
        <>
          <HStack align="flex-start">
            <FormControl id="address">
              <FormLabel>endereço</FormLabel>
              <Input
                type="text"
                value={values.address}
                onChange={(event) =>
                  setFieldValue("address", event.target.value)
                }
              />
            </FormControl>
            <FormControl id="number">
              <FormLabel>número</FormLabel>
              <Input
                type="text"
                value={values.number}
                onChange={(event) =>
                  setFieldValue("number", event.target.value)
                }
              />
            </FormControl>
            <FormControl id="complemento">
              <FormLabel>complemento</FormLabel>
              <Input
                type="text"
                value={values.complement}
                onChange={(event) =>
                  setFieldValue("complement", event.target.value)
                }
              />
            </FormControl>
          </HStack>
          <Box height="16px" />
          <HStack align="flex-start">
            <FormControl id="birthdate">
              <FormLabel>bairro</FormLabel>
              <Input
                type="text"
                value={values.neighborhood}
                onChange={(event) =>
                  setFieldValue("neighborhood", event.target.value)
                }
              />
            </FormControl>
            <FormControl id="cidade">
              <FormLabel>cidade</FormLabel>
              <Input
                type="text"
                value={values.city}
                onChange={(event) => setFieldValue("city", event.target.value)}
              />
            </FormControl>
            <FormControl id="estado">
              <FormLabel>estado</FormLabel>
              <Input
                type="text"
                value={values.state}
                onChange={(event) => setFieldValue("state", event.target.value)}
              />
            </FormControl>
          </HStack>
          <Box height="16px" />
          <Center>
            <Button onClick={nextStep} type="button" colorScheme="orange">
              ver o preço do meu seguro
            </Button>
          </Center>
        </>
      );

    default:
      return null;
  }
};

export default PersonalDataForm;
