import { useForm } from "react-hook-form";
import { FC, HTMLAttributes, useContext, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-hot-toast";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { useMutation } from "@tanstack/react-query";
import { cn } from "../../../lib/class-name-utils";
import { Message } from "../../../lib/validators/message";
import { MessagesContext } from "./context/messages";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

interface FormDataChatInput {
  text: string;
}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataChatInput>();
  const { addMessage, setIsMessageUpdating, updateMessage, messages } =
    useContext(MessagesContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ messages: [message] }),
      });
      return response.body;
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream");

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      // construct new message to add
      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      // add new message to state
      addMessage(responseMessage);

      setIsMessageUpdating(true);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
        setIsMessageUpdating(false);
        reset();
      }
    },
  });

  const onSubmit = (data: FormDataChatInput) => {
    const message: Message = {
      id: nanoid(),
      isUserMessage: true,
      text: data.text,
    };

    sendMessage(message);
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
              handleSubmit(onSubmit)();
            }
          }}
          {...register("text")}
          autoFocus
          ref={textareaRef}
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
