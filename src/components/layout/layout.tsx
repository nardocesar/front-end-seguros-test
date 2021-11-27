import { Container } from "@chakra-ui/react";
import HeaderComponent from "../header";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
    </>
  );
};

export default LayoutComponent;
