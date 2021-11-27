import JumbotronComponent from "../components/jumbotron";
import FormModule from "./form";

const HomeModule = () => {
  return (
    <>
      <JumbotronComponent
        category="Seguro residencial"
        title="existe coisa melhor do que se sentir seguro em casa?"
        subtitle="encontre o plano residencial ideal pra você"
        buttonAction={() => console.log("click")}
        buttonText="Fazer cotação agora"
      />

      <FormModule />
    </>
  );
};

export default HomeModule;
