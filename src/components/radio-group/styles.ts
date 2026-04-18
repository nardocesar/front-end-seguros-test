import styled from "styled-components";
import DEFAULT_COLORS from "../../styles/theme/colors";

export const CustomRadioLabel = styled.label`
  display: flex;
  width: 100%;
  max-width: 170px;
  position: relative;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CustomRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomRadioCheckmark = styled.span<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 10px;
  min-height: 150px;
  border-radius: 20px;

  box-shadow: ${(props) =>
    props.checked ? "0 0 20px rgba(0, 0, 0, 0.25);" : "none"};
  color: ${(props) => (props.checked ? "white" : "black")};
  background-color: ${(props) =>
    props.checked ? DEFAULT_COLORS.orange : DEFAULT_COLORS["light-brown"]};

  font-weight: bold;

  transition: all 128ms ease-out;

  &:hover {
    background-color: ${DEFAULT_COLORS.orange};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    color: white;
  }
`;
