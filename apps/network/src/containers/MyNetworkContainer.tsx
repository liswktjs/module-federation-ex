import { useAuth0Client } from "@federation/shared";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { myNetworkAtom } from "../atom";
import { getMyNetwork } from "../api";
import MyNetwork from "../components/MyNetwork";

const MyNetworkContainer = () => {
  const auth0Client = useAuth0Client();
  const [myNetwork, setMyNetwork] = useRecoilState(myNetworkAtom);

  const fetchMyNetwork = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const myNetwork = await getMyNetwork(token);
      setMyNetwork(myNetwork);
    } catch (e) {
      alert(e);
    }
  }, [auth0Client, setMyNetwork]);

  return <MyNetwork myNetwork={myNetwork} fetchMyNetwork={fetchMyNetwork} />;
};

export default MyNetworkContainer;
