import styled from "styled-components";
import DEFAULT_COLORS from "../../styles/theme/colors";

export const JumbotronArea = styled.div`
  width: 100%;
  padding: 60px;
  background: linear-gradient(
    110deg,
    ${DEFAULT_COLORS.brown} 70%,
    ${DEFAULT_COLORS["light-brown"]} 30%
  );
`;
