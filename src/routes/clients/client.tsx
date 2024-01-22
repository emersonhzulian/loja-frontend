import { useLoaderData, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ClientDTO } from "../../apiClient/data-contracts";
import BackButton from "../../components/backButton";
import { ClientComponent } from "../../components/clients/clientComponent";

export async function actionDelete({ params }) {
  const api = Api.Instance;
  await api.clientsDelete(Number(params.clienteId));

  return redirect(`/clientes`);
}

export async function loader({ params }): Promise<ClientDTO> {
  const clienteId = params.clienteId;
  const api = Api.Instance;
  const client = (await api.clientsDetail(clienteId)).data;
  return client;
}

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
