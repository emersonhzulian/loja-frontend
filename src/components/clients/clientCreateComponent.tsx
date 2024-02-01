export function ClientCreateComponent({ name }: { name?: string }) {
  return (
    <>
      <div key={0}>
        Nome: <input type="text" name="name" defaultValue={name ?? ""}></input>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
