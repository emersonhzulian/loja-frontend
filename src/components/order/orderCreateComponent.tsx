import { ClientDTO } from "../../apiClient/data-contracts";

export function OrderCreateComponent({ clients }: { clients: ClientDTO[] }) {
  return (
    <>
      <div key={0}>
        Cliente:{" "}
        <select name="clientId">
          {clients.map((client) => (
            <option value={client.id?.toString()} key={client.name?.toString()}>
              {client.name?.toString()}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
