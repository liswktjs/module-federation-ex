import { atom } from "recoil";
import { ConnectionType, MyNetworkType } from "./types";

export const myNetworkAtom = atom<MyNetworkType | null>({
  key: "my-network",
  default: null,
});

export const connectionsAtom = atom<ConnectionType[]>({
  key: "connections",
  default: [],
});
