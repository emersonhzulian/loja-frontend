import { Outlet, Link, useNavigation } from "react-router-dom";

export function Root() {
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`comandas`}>Comandas abertas</Link>
            </li>
            <li>
              <Link to={`pedidos`}>Cozinha</Link>
            </li>
            <li>
              <Link to={`produtos`}>Produtos</Link>
            </li>
            <li>
              <Link to={`clientes`}>Clientes</Link>
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
