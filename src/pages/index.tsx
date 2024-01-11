import { useState } from "react";
import Map from "../component/Map";
import Markers from "../component/Markers";
import StoreBox from "../component/StoreBox";

import * as stores from "../data/store_data.json";

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const storeDatas = stores["DATA"];

  console.log(currentStore);

  return (
    <>
      <Map setMap={setMap} />
      <Markers
        storeDatas={storeDatas}
        map={map}
        setCurrentStore={setCurrentStore}
      />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}
