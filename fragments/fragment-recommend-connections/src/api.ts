import type { ConnectionType } from "./types";

const HOST_NAME = "http://localhost:4000";

export const getConnections = async (
  token: string
): Promise<ConnectionType[]> => {
  const res = await fetch(`${HOST_NAME}/connections?_limit=3`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
