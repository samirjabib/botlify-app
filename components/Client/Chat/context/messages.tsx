import React, { createContext, useState } from "react";
import INITIAL_STATE from "./initialState";
import { MessageContextType } from "./types";
import { Message } from "../../../../lib/validators/message";
import { nanoid } from "nanoid";

export const MessagesContext = createContext<MessageContextType>(INITIAL_STATE);

const defaultValue = [
  { id: nanoid(), text: "¿Bienvenido, como puedo ayudarte?", isUserMessage: false },
];

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(defaultValue);

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
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) };
        }
        return message;
      })
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
