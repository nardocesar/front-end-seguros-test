import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeModule from "../views/home";

const Home: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeModule />
    </QueryClientProvider>
  );
};

export default Home;
