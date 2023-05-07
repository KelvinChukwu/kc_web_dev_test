import CommonPSetView from "./commonPSetView";
import { useEffect } from "react";

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
  useEffect(() => {
    document.title = 'Psets';
  }, []);
  return (
    <CommonPSetView api_endpoint={"/api/psets"} dataMapFunction={pSetsMap} />
  );
}

export default PSets;
