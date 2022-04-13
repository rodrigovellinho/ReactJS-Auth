import { useContext } from "react";
import Can from "../component/Can";
import { AuthContext } from "../context/AuthContext";
import { useCan } from "../hooks/useCan";

import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    roles: ["administrator", "editor"],
  });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      <Can permissions={["metrics.list"]}>Métricas</Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
