import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import LayoutComponent from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ChakraProvider>
  );
}

export default MyApp;
