import { ClientDTO } from "../../apiClient/data-contracts";

export function ClientComponent({ client }: { client: ClientDTO }) {
  return (
    <>
      <div key={client.id}>
        Nome: {client.name}
        <br></br>
      </div>
    </>
  );
}
