import { useState } from "react";

import Map from "../component/Map";
import Markers from "../component/Markers";

import StoreBox from "../component/StoreBox";
import { StoreType } from "@/interface";

import axios from "axios";

export default function Home({ stores }: { stores: StoreType[] }) {
  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}

export async function getStaticProps() {
  const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

  return {
    props: { stores: stores.data },
    revalidate: 60 * 60,
  };
}
