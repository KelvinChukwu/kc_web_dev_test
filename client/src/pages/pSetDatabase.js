import CommonPSetView from "./commonPSetView";

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
  return (
    <CommonPSetView api_endpoint={"/api/pset-database"} dataMapFunction={pSetDatabaseMap} />
  );
}

export default PSetDatabase;
