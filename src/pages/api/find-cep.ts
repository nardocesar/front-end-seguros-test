import { NextApiRequest, NextApiResponse } from "next";

const FindCepAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cep } = req.body;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default FindCepAPI;
