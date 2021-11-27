import { Container } from "@chakra-ui/react";
import HeaderComponent from "../header";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderComponent />
      <Container maxW="container.xl">
        <main>{children}</main>
      </Container>
    </>
  );
};

export default LayoutComponent;
