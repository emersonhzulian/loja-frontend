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
              <Link to={`comandas-historico`}>Comandas historico</Link>
            </li>
            <li>
              <Link to={`cozinha`}>Cozinha</Link>
            </li>
            <li>
              <Link to={`produtos`}>produtos</Link>
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
