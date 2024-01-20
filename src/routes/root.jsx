import { Outlet, Link, useLoaderData } from "react-router-dom";

export async function loader() {
  return { dados: { dados: 0 } };
}

export function Root() {
  const { dados } = useLoaderData();
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
