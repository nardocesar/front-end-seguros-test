import { useMutation, UseMutationOptions } from "react-query";
import { LOCAL_API } from "../config";
import { ViaCepResponse } from "../models/entities";

const FindCepMutation = (
  config?: UseMutationOptions<ViaCepResponse, Error, { cep: string }, unknown>
) =>
  useMutation(async ({ cep }: { cep: string }) => {
    const res = await LOCAL_API.post("/find-cep", JSON.stringify({ cep }));
    return res.data;
  }, config);

export default FindCepMutation;
