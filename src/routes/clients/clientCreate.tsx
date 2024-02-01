import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ClientDTO } from "../../apiClient/data-contracts";
import BackButton from "../../components/backButton";
import { ClientCreateComponent } from "../../components/clients/clientCreateComponent";
import type { ActionFunction, LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({ request }): Promise<string> => {
  const url = new URL(request.url);
  const nome = url.searchParams.get("nome") ?? "";

  return nome;
};

export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const nome = url.searchParams.get("nome") ?? "";
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  let newEntity: ClientDTO = {
    name: updates.name as string,
  };

  const api = Api.Instance;

  newEntity = (await api.clientsCreate(newEntity)).data;

  return redirect(
    nome
      ? `/comandas/criar?clienteId=${newEntity.id}`
      : `/clientes/${newEntity.id}`
  );
};

export function ClientCreate() {
  const name = useLoaderData() as string;
  return (
    <>
      <Form method="post" id="client-form">
        <ClientCreateComponent name={name} />
        <button type="submit">Criar</button>
        <BackButton url={name ? undefined : "/clientes"}></BackButton>
      </Form>
    </>
  );
}
