"use client";

import { FC, HTMLAttributes, useContext } from "react";
import { MessagesContext } from "./context/messages";
import MarkdownLite from "./ChatMarkDownLite";
import clsx from "clsx";
import { cn } from "@/lib/class-name-utils";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);

  const inverseMessages = [...messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map((message) => {
        return (
          <div className="chat-message" key={`${message.id}-${message.id}`}>
            <div
              className={clsx(
                "flex items-end",
                message.isUserMessage ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={clsx(
                  "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                  message.isUserMessage
                    ? "order-1 items-end"
                    : "order-2 items-start"
                )}
              >
                <p
                  className={`
                    rounded-md  px-4 py-2 
                     ${
                       message.isUserMessage
                         ? "text-white bg-grayLight "
                         : "bg-blue text-white/80"
                     }
                  `}
                >
                  <MarkdownLite text={message.text} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
