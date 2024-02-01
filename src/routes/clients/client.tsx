import { useLoaderData, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ClientDTO } from "../../apiClient/data-contracts";
import BackButton from "../../components/backButton";
import { ClientComponent } from "../../components/clients/clientComponent";
import type { ActionFunction, LoaderFunction } from "react-router";

export const actionDelete: ActionFunction = async ({ params }) => {
  const api = Api.Instance;
  await api.clientsDelete(Number(params.clienteId));

  return redirect(`/clientes`);
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<ClientDTO> => {
  const clienteId = parseInt(params.clienteId ?? "");
  const api = Api.Instance;
  const client = (await api.clientsDetail(clienteId)).data;
  return client;
};

export function Client() {
  const client = useLoaderData() as ClientDTO;
  return (
    <>
      <ClientComponent client={client} />

      <br></br>
      <br></br>
      <BackButton url={"/clientes"}></BackButton>
    </>
  );
}
