import { redirect } from "react-router-dom";
import { ClientDTO } from "../../apiClient/data-contracts";
import Creatable from "react-select/creatable";

export function OrderCreateComponent({ clients }: { clients: ClientDTO[] }) {
  const options = clients.map((x) => ({
    value: x.id,
    label: x.name,
  }));

  return (
    <>
      <div key={0}>
        Cliente:{" "}
        <Creatable
          placeholder="Selecione"
          formatCreateLabel={(inputText) => `Criar ${inputText}`}
          isClearable
          name="clientId"
          options={options}
          onCreateOption={(inputText) =>
            (window.location.href = `/clientes/criar?nome=${inputText}`)
          }
        />
        <br></br>
        <br></br>
      </div>
    </>
  );
}
