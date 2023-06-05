import { useForm } from "react-hook-form";
import { FC, HTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { useMutation } from "@tanstack/react-query";
import { cn } from "../../../lib/class-name-utils";
import { Message } from "../../../lib/validators/message";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

interface FormDataChatInput {
  text: string;
}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataChatInput>();

  const { mutate, isLoading } = useMutation({
    mutationFn: (message: Message) => {
      return fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({ message: [message] }),
      });
    },
  });

  const onSubmit = (data: FormDataChatInput) => {
    const message: Message = {
      id: nanoid(),
      isUserMessage: true,
      text: data.text,
    };
    mutate(message);
  };

  return (
    <div {...props} className={cn("py-4", className)}>
      <div className=" relative flex-1 overflow-hidden rounded-lg outline-none focus:outline-none ">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(onSubmit);
            }
          }}
          {...register("text")}
          autoFocus
          placeholder="Write a message..."
          className={clsx(
            "bg-grayLight shadow-2xl ",
            " resize-none rounded-md",
            "block w-full border outline-none border-darkGray text-white placeholder-white/60",
            "focus:outline-none text-sm sm:leading-6 py-1.5"
          )}
        />
      </div>
    </div>
  );
};

export default ChatInput;
