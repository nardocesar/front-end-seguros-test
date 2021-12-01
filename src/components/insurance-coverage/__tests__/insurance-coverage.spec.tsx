import { render, screen, fireEvent } from "@testing-library/react";
import InsuranceCoverageComponent from "../insurance-coverage";

import formMock from "../../../utils/tests/form-mock";
import IncendioIcon from "../../../assets/icons/incendio";
import { FormikErrors } from "formik/dist/types";
import { FormFields } from "../../../models/entities";

import "@testing-library/jest-dom";

const formSteps = [
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
];

const componentMock = {
  indexToShow: 0,
  nextStep: jest.fn(() => console.log("next step")),
  setFieldValue: jest.fn() as (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormFields>>,
  value: formMock,
  steps: formSteps,
};

const createComponent = (data: typeof componentMock) =>
  render(<InsuranceCoverageComponent {...data} />);

describe("Insurance coverage component", () => {
  test("Should render component", () => {
    createComponent(componentMock);

    const mainHeader = screen.getByRole("heading", {
      name: "Escolha suas coberturas",
    });

    const button = screen.getByRole("button", { name: "escolher coberturas" });

    expect(mainHeader).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Should call next step", () => {
    const nextStep = jest.fn(() => console.log("next step"));
    createComponent({ ...componentMock, nextStep });

    const button = screen.getByRole("button", { name: "escolher coberturas" });

    fireEvent.click(button);

    expect(nextStep).toHaveBeenCalled();
    expect(nextStep).toHaveBeenCalledTimes(1);
  });
});
