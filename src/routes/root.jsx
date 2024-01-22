import { Outlet, Link, useNavigation } from "react-router-dom";

export function Root() {
  const navigation = useNavigation();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`comandas?status=1`}>Comandas abertas</Link>
            </li>
            <li>
              <Link to={`cozinha`}>Cozinha</Link>
            </li>
            <li>
              <Link to={`produtos`}>Produtos</Link>
            </li>
            <li>
              <Link to={`clientes`}>Clientes</Link>
            </li>
            <li>
              <Link to={`comandas-historico`}>Comandas historico</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
