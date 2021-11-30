import { Box, Heading, Container, Button, Center } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import RadioGroupComponent from "../../components/radio-group";
import { RadioButtonProps } from "../../components/radio-group/radio-group";

export type QuestionField =
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "question5";

interface RadioQuestion {
  name: string;
  title: string;
  options: Array<RadioButtonProps>;
}
const firstFormSteps: Array<RadioQuestion> = [
  {
    name: "1c1f1c9d-fa98-49f0-8eac-d78ed1e40696",
    title: "o imóvel está:",
    options: [
      {
        label: "ocupado",
        value: 1,
      },
      {
        label: "desocupado",
        value: 2,
      },
    ],
  },
  {
    name: "ca708e31-29cb-46ee-b423-a71bf2dcf9f6",
    title: "o imóvel foi construído com:",
    options: [
      {
        label: "madeira",
        value: 1,
      },
      {
        label: "alvenaria (tijolos, cimento, pedras ou blocos de concreto)",
        value: 2,
      },
    ],
  },
  {
    name: "c456ed99-1f9a-495d-b87b-d7245cb86ca0",
    title: "o seguro é para um(a):",
    options: [
      {
        label: "casa",
        value: 1,
      },
      {
        label: "apartamento",
        value: 2,
      },
      {
        label: "chácaras, sítios ou fazendas",
        value: 3,
      },
    ],
  },
  {
    name: "8045c56a-a07c-416c-ac2e-4ee530076822",
    title: "o imóvel está em condomínio fechado:",
    options: [
      {
        label: "sim",
        value: 1,
      },
      {
        label: "não",
        value: 2,
      },
    ],
  },
  {
    name: "0d79ceba-2a96-4eb7-9d3a-1a7aa1af3c63",
    title: "o uso do imóvel é para:",
    options: [
      {
        label: "moradia",
        value: 1,
      },
      {
        label: "veraneio",
        value: 2,
      },
    ],
  },
];

const FormModule = () => {
  const [step, setStep] = useState(0);

  const { values, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        question1: 1,
        question2: 1,
        question3: 1,
        question4: 1,
        question5: 1,
      },
      onSubmit: (data) => console.log(data),
    });

  const nextStep = useCallback(
    () => (step < firstFormSteps.length ? setStep(step + 1) : null),
    [step]
  );
  const prevStep = useCallback(
    () => (step > 0 ? setStep(step - 1) : null),
    [step]
  );

  return (
    <Box width="100%" padding="30px">
      <Container as="section" maxW="2xl">
        <Heading as="h2" size="2xl" textAlign="center">
          quer saber quanto custa seu seguro?
        </Heading>
        <Box height="12px" />
        <Heading as="h3" size="sm" textAlign="center" color="gray">
          comece respondendo as perguntas abaixo e descubra :)
        </Heading>

        <Box as="article" position="relative">
          <form onSubmit={handleSubmit}>
            {firstFormSteps.map((item, _index) => {
              const fieldName: QuestionField = `question${
                _index + 1
              }` as QuestionField;

              return _index === step ? (
                <RadioGroupComponent
                  key={_index}
                  nextStep={nextStep}
                  fieldName={fieldName}
                  value={values[fieldName]}
                  setFieldValue={setFieldValue}
                  {...item}
                />
              ) : null;
            })}
          </form>
          <Center mt="12">
            <Button variant="outline" size="sm" onClick={prevStep}>
              Voltar ao anterior
            </Button>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default FormModule;
