import CommonPSetView from "./commonPSetView";

function pSetsMap(pSet) {
  return (
    {
      name: pSet.name,
      doi:
        pSet?.doi == null || pSet?.doi === ""
          ? null
          : `https://doi.org/${pSet?.doi}`
    }
  );
}

function PSets() {
  return (
    <CommonPSetView api_endpoint={"/api/psets"} dataMapFunction={pSetsMap} />
  );
}

export default PSets;
