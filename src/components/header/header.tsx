import Image from "next/image";
import { Container } from "@chakra-ui/react";
import { CustomHeader, CustomPicture } from "./styles";

import Logo from "../../assets/images/logo-seguros.png";

const HeaderComponent = () => {
  return (
    <CustomHeader>
      <Container maxW="container.xl">
        <CustomPicture>
          <Image src={Logo} layout="intrinsic" />
        </CustomPicture>
      </Container>
    </CustomHeader>
  );
};

export default HeaderComponent;
