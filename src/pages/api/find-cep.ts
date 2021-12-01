import { NextApiRequest, NextApiResponse } from "next";

const FindCepAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cep } = req.body;

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  return await response.json();
};

export default FindCepAPI;
