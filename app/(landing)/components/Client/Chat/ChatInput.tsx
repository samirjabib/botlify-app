"use client";

import { FC, HTMLAttributes } from "react";
import { cn } from "../../../../lib/class-name-utils";
import TextareaAutosize from "react-textarea-autosize";

import clsx from "clsx";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn("border-t border-white/60", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          autoFocus
          placeholder="Write a message..."
          className={clsx(
            "bg-gray",
            " disabled:opacity-50 resize-none rounded-md",
            "block w-full border outline-none border-white/60 text-white placeholder-white/60",
            "focus:ring-0 text-sm sm:leading-6 py-1.5"
          )}
        />
      </div>
    </div>
  );
};

export default ChatInput;
