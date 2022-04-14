import { useContext } from "react";
import Can from "../component/Can";
import { AuthContext } from "../context/AuthContext";
import { useCan } from "../hooks/useCan";

import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    roles: ["administrator", "editor"],
  });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      <Can permissions={["metrics.list"]}>Métricas</Can>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
