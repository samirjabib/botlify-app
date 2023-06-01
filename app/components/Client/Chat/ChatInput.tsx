import { useForm } from "react-hook-form";
import { FC, HTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize";
import clsx from "clsx";
import useSWR from "swr";
import { nanoid } from "nanoid";
import { cn } from "../../../lib/class-name-utils";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

interface FormDataChatInput {
  message: string;
}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataChatInput>();

  const { mutate } = useSWR("chat", () => {
    return fetch("http://localhost:3000/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: "hello" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  });

  const onSubmit = (data: FormDataChatInput) => console.log(data, " click");

  return (
    <div {...props} className={cn("py-4", className)}>
      <div className=" relative flex-1 overflow-hidden rounded-lg outline-none focus:outline-none ">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              const message = {
                id: nanoid(),
              };

              e.preventDefault();
              handleSubmit(onSubmit)();
            }
          }}
          {...register("message")}
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
