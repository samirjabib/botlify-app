import { cn } from "../../../../lib/class-name-utils";
import { useForm } from "react-hook-form";
import { FC, HTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize";
import clsx from "clsx";

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

  const onSubmit = (data: FormDataChatInput) => console.log(data, " click");

  return (
    <div {...props} className={cn("border-t border-white/60", className)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none"
      >
        <TextareaAutosize
          rows={2}
          maxRows={4}
          {...register("message")}
          autoFocus
          placeholder="Write a message..."
          className={clsx(
            "bg-gray",
            " disabled:opacity-50 resize-none rounded-md",
            "block w-full border outline-none border-white/60 text-white placeholder-white/60",
            "focus:ring-0 text-sm sm:leading-6 py-1.5"
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatInput;
