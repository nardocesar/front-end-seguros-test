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
import { useCallback, useEffect } from "react";
import { FormFields, ViaCepResponse } from "../../../models/entities";
import { useFindCepMutation } from "../../../mutations";

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
  const { mutate, status, reset, data } = useFindCepMutation();

  const setValuesFromCep = useCallback(
    (data: ViaCepResponse) => {
      setFieldValue("address", data.logradouro);
      setFieldValue("complement", data.complemento);
      setFieldValue("neighborhood", data.bairro);
      setFieldValue("city", data.localidade);
      setFieldValue("state", data.uf);
    },
    [setFieldValue]
  );

  useEffect(() => {
    if (values.cep.length !== 8) {
      reset();
    } else {
      mutate({ cep: values.cep });
    }
  }, [values, mutate, reset]);

  useEffect(() => {
    if (data) {
      setValuesFromCep(data);
    }
  }, [data, setValuesFromCep]);

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
                maxLength={8}
                onChange={(event) => setFieldValue("cep", event.target.value)}
              />
            </FormControl>
          </HStack>
          <Box height="16px" />
          <Center>
            <Button
              onClick={nextStep}
              type="button"
              colorScheme="orange"
              isLoading={status === "loading"}
            >
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
                disabled={Boolean(values.address)}
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
                disabled={Boolean(values.number)}
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
                disabled={Boolean(values.complement)}
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
                disabled={Boolean(values.neighborhood)}
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
                disabled={Boolean(values.city)}
                onChange={(event) => setFieldValue("city", event.target.value)}
              />
            </FormControl>
            <FormControl id="estado">
              <FormLabel>estado</FormLabel>
              <Input
                type="text"
                value={values.state}
                disabled={Boolean(values.state)}
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
