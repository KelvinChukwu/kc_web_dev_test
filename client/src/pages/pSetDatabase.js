import CommonPSetView from "./commonPSetView";
import { useEffect } from "react";

function pSetDatabaseMap(pSet) {
  return (
    {
      name: pSet.name,
      doi:
        pSet?.repositories[0]?.doi == null || pSet?.repositories[0]?.doi === ""
          ? null
          : `https://doi.org/${pSet?.repositories[0]?.doi}`
    }
  );
}

function PSetDatabase() {
  useEffect(() => {
    document.title = 'Pset Database';
  }, []);
  return (
    <CommonPSetView api_endpoint={"/api/pset-database"} dataMapFunction={pSetDatabaseMap} />
  );
}

export default PSetDatabase;
