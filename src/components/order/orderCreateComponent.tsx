import { ClientDTO } from "../../apiClient/data-contracts";
import Creatable from "react-select/creatable";

import { useNavigate } from "react-router-dom";

export function OrderCreateComponent({
  clients,
  selectedId,
}: {
  clients: ClientDTO[];
  selectedId?: number;
}) {
  let navigate = useNavigate();
  const options = clients.map((x) => ({
    value: x.id,
    label: x.name,
  }));

  const selected = selectedId
    ? options.find((x) => x.value == selectedId)
    : undefined;

  return (
    <>
      <div key={0}>
        Cliente:{" "}
        <Creatable
          placeholder="Selecione"
          defaultValue={
            selected
              ? { value: selected.value, label: selected.label }
              : undefined
          }
          formatCreateLabel={(inputText) => `Criar ${inputText}`}
          isClearable
          name="clientId"
          options={options}
          onCreateOption={(inputText) =>
            navigate(`/clientes/criar?nome=${inputText}`)
          }
        />
        <br></br>
        <br></br>
      </div>
    </>
  );
}
