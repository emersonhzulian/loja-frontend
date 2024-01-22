import { Link, redirect, useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ClientDTO } from "../../apiClient/data-contracts";
import { ClientComponent } from "../../components/clients/clientComponent";
import DeleteButton from "../../components/deleteButton";

export async function loader({ request, params }): Promise<ClientDTO[]> {
  const url = new URL(request.url);
  const searchName = url.searchParams.get("nome") || "";

  const api = Api.Instance;
  const clients = (await api.clientsList({ Name: searchName })).data;
  return clients;
}

export function Clients() {
  const clients = useLoaderData() as ClientDTO[];

  return (
    <>
      <div>Clientes</div>
      <br></br>
      {clients?.map((client) => (
        <div key={client.id}>
          <ClientComponent client={client} />
          <DeleteButton action={`/clientes/${client.id}/deletar`} />
          <br></br>
          <br></br>
        </div>
      ))}

      <Link to={`/clientes/criar`}>Criar Cliente</Link>
    </>
  );
}
