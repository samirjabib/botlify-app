import React, { createContext, useState } from "react";
import INITIAL_STATE from "./initialState";
import { MessageContextType } from "./types";
import { Message } from "../../../../lib/validators/message";
import { nanoid } from "nanoid";

export const MessagesContext = createContext<MessageContextType>(INITIAL_STATE);

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: nanoid(), text: "how i can help you?", isUserMessage: false },
  ]);

  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id ? { ...message, ...message } : message
      )
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        addMessage,
        isMessageUpdating,
        messages,
        removeMessage,
        setIsMessageUpdating,
        updateMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
