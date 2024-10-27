import { ConnectionType, MyNetworkType } from "./types";

const HOST_NAME = "http://localhost:4000";

export const getMyNetwork = async (token: string): Promise<MyNetworkType> => {
  const res = await fetch(`${HOST_NAME}/my-network`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const getConnections = async (
  token: string
): Promise<ConnectionType[]> => {
  const res = await fetch(`${HOST_NAME}/connections`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
