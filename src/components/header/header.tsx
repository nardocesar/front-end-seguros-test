import Image from "next/image";
import { Container } from "@chakra-ui/react";
import { CustomHeader, CustomPicture } from "./styles";

import Logo from "../../assets/images/logo-seguros.png";

const HeaderComponent = () => {
  return (
    <CustomHeader>
      <Container maxW="container.xl">
        <CustomPicture>
          <Image
            alt="Logo Itaú seguros"
            src={Logo}
            layout="intrinsic"
            quality="100"
          />
        </CustomPicture>
      </Container>
    </CustomHeader>
  );
};

export default HeaderComponent;
