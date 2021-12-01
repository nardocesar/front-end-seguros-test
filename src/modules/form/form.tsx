import { Box, Heading, Container, Button, Center } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import RadioGroupComponent from "../../components/radio-group";
import { RadioButtonProps } from "../../components/radio-group/radio-group";
import InsuranceCoverageComponent from "../../components/insurance-coverage";
import { FormFields, InsuranceCoverageItem } from "../../models/entities";
import DanosEletricosIcon from "../../assets/icons/danos-eletricos";
import IncendioIcon from "../../assets/icons/incendio";
import SubtracaoBensIcon from "../../assets/icons/subtracao-bens";
import VidrosIcon from "../../assets/icons/vidros";
import RespFamiliarIcon from "../../assets/icons/resp-familiar";
import VazTubIcon from "../../assets/icons/vaz-tub";
import PagAluguelIcon from "../../assets/icons/pag-aluguel";
import VendavalIcon from "../../assets/icons/vendaval";
import TremorIcon from "../../assets/icons/tremor";
import ImpactoVeiculoIcon from "../../assets/icons/impacto-veiculo";
import SubBikeIcon from "../../assets/icons/sub-bike";
import PersonalDataForm from "./components/personal-data-form";

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
export const firstFormSteps: Array<RadioQuestion> = [
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

const coverageSteps: Array<InsuranceCoverageItem> = [
  {
    icon: IncendioIcon,
    title: "incêndio, explosão, implosão, fumaça e queda de aeronave",
    description:
      "Curtir sua casa sem a preocupação de raios ou acidentes causados com panelas de pressão. Com essa garantia você tem a cobertura de prejuízos provocados por um incêndio, explosão, queda de raios, fumaça e queda de aeronave.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: DanosEletricosIcon,
    title: "danos elétricos",
    description:
      "A geladeira queimou depois de um curto circuito? Você está protegido de danos provocados nas instalações e nos aparelhos elétricos por conta de uma descarga elétrica ou variações anormais de tensão, por exemplo.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: SubtracaoBensIcon,
    title: "subtração de bens",
    description:
      "Se os bens da sua casa forem subtraidos, com essa cobertura você não fica no prejuízo. Ela é ideal em casos de assalto ou arrombamento, além de cobrir também danos causados na estrutura da casa.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: VidrosIcon,
    title: "quebra de vidros",
    description:
      "Uma bolada na vidraça, ou um espelho quebrado? Essa cobertura garante a troca de vidros quebrados, troca de box e espelhos internos ou externos, cobre também louças sanitárias e cooktop de vidro por exemplo.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: RespFamiliarIcon,
    title: "responsabilidade civil familiar",
    description:
      "Um cano furado na sua residência afetou o apartamento do vizinho ou aquele vaso caiu na janela ao lado? Basta um pedido de desculpas e resto te ajudamos. Essa cobertura é ideal em casos de danos que  você ou algum morador da sua casa causou a outra pessoa ou para um imóvel por acidente.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: VazTubIcon,
    title: "vazamento de tubulações",
    description:
      "A pia ou a banheira vazou? Pensando em você, temos essa cobertura para reparos da parte hidráulica em casos de vazamento de tubulações.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: PagAluguelIcon,
    title: "perda ou pagamento de aluguel",
    description:
      "A casa em que você mora ou aluga está sem condições de uso por conta de um incêndio, vendaval, impacto de veiculo ou tremor de terra e terremoto? Fique tranquilo! Nessa cobertura é garantido o pagamento do aluguel e condomínio por até 6 meses! Se a casa for alugada o pagamento será feito para o proprietário, se a casa for sua e você estiver morando nela esta cobertura garante o reembolso de outra moradia enquanto a sua casa é reparada.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: IncendioIcon,
    title: "negócios em casa",
    description:
      "Ideal para você que tem um escritório ou comércio em casa! Você está protegido caso tenha prejuízos em seus equipamentos nos seguintes acontecimentos: Danos elétricos, subtração de bens, incêndio, explosão ou queda de raios.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: VendavalIcon,
    title: "vendaval, furacão, ciclone, tornado e queda de granizo",
    description:
      "Um vendaval ou uma chuva de granizo te trouxeram prejuízos? Essa garantia é ideal em casos de danos provocados por vendaval ou chuva de granizo que podem causar um destelhamento ou uma quebra de vidros.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: TremorIcon,
    title: "tremor de terra e terremoto",
    description:
      "Já pensou em tremor ou terremoto? Essa garantia é ideal para cobrir sua casa caso sofra esse tipo de evento.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: RespFamiliarIcon,
    title: "responsabilidade civil empregador",
    description:
      "Tranquilidade para o seu funcionário com registro CLT... Ele está protegido caso sofra algum acidente durante o expediente, cobrindo despesas médicas, hospitalares e odontológicas.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: ImpactoVeiculoIcon,
    title: "impacto de veículos terrestres",
    description:
      "Estamos com você todos os momentos, inclusive em casos de desmoronamento por impacto de veiculo de terceiros de sua casa. Essa garantia cobre prejuízos com muros, portões, paredes, vigas e colunas.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
  {
    icon: SubBikeIcon,
    title: "subtração de bicicleta",
    description:
      "Essa cobertura é ideal para você que tem uma bike, pois com ela você tem proteção em caso de subtração dentro e fora da sua casa. Protege também se acontecer algum dano com a bike, decorrente de acidente com o veiculo que esteja fazendo o seu transporte.",
    options: [
      {
        label: "não",
        value: "não",
      },
      {
        label: "sim",
        value: "sim",
      },
    ],
  },
];

const FormModule = () => {
  const [step, setStep] = useState(0);
  const [formModuleToShow, setFormModuleToShow] = useState(0);

  const { values, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik<FormFields>({
      initialValues: {
        question1: 1,
        question2: 1,
        question3: 1,
        question4: 1,
        question5: 1,
        coverage1: "sim",
        coverage2: "sim",
        coverage3: "sim",
        coverage4: "sim",
        coverage5: "sim",
        coverage6: "sim",
        coverage7: "sim",
        coverage8: "sim",
        coverage9: "sim",
        coverage10: "sim",
        coverage11: "sim",
        coverage12: "sim",
        coverage13: "sim",
        name: "",
        cpf: "",
        birthdate: "",
        cep: "",
        address: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      onSubmit: (data) => console.log(data),
    });

  const nextStep = useCallback(
    () =>
      step < firstFormSteps.length + coverageSteps.length + 3
        ? setStep(step + 1)
        : null,
    [step]
  );
  const prevStep = useCallback(
    () => (step > 0 ? setStep(step - 1) : null),
    [step]
  );

  useEffect(() => {
    if (step < firstFormSteps.length - 1) {
      setFormModuleToShow(0);
    }

    if (
      step > firstFormSteps.length - 1 &&
      step < firstFormSteps.length + coverageSteps.length
    ) {
      setFormModuleToShow(1);
    }

    if (step > firstFormSteps.length + coverageSteps.length - 1) {
      setFormModuleToShow(2);
    }
  }, [step]);

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

        <Box height="32px"></Box>

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

            {formModuleToShow === 1 && (
              <InsuranceCoverageComponent
                indexToShow={step - firstFormSteps.length}
                nextStep={nextStep}
                steps={coverageSteps}
                value={values}
                setFieldValue={setFieldValue}
              />
            )}

            {formModuleToShow === 2 && (
              <PersonalDataForm
                indexToShow={
                  step - (firstFormSteps.length + coverageSteps.length)
                }
                nextStep={nextStep}
                values={values}
                setFieldValue={setFieldValue}
              />
            )}
          </form>
          <Center mt="12">
            <Button variant="outline" size="sm" onClick={prevStep}>
              Voltar ao anterior
            </Button>
          </Center>
        </Box>

        <Box height="32px"></Box>
      </Container>
    </Box>
  );
};

export default FormModule;
