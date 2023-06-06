import { Message } from "../../../../lib/validators/message";

export type MessageContextType = {
    messages: Message[];
    isMessageUpdating: boolean;
    addMessage: (message: Message) => void;
    removeMessage: (id: string) => void;
    updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
    setIsMessageUpdating: (isUpdating: boolean) => void;
}
 
