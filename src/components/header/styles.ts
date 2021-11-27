import styled from "styled-components";
import DEFAULT_COLORS from "../../styles/theme/colors";

export const CustomHeader = styled.header`
  width: 100%;
  padding: 15px 0;
  background-color: ${DEFAULT_COLORS["dark-blue"]};
`;

export const CustomPicture = styled.picture`
  display: block;
  width: 150px;
`;
