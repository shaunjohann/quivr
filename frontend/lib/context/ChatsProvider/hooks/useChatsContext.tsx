/* eslint-disable */
import { useContext } from "react";

import { ChatsContext } from "../chats-provider";

export const useChatsContext = () => {
  const context = useContext(ChatsContext);

  if (context === undefined) {
    throw new Error("useChatsStore must be used inside ChatsProvider");
  }

  return context;
};
