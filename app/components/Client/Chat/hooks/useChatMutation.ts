import { Message } from "../../../../lib/validators/message";

export const useChatMutation = () => {
    const sendMessage = async (message : Message) => {
      try {
        const res = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          body: JSON.stringify(message),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (res.ok) {
          return res.json();
        }
  
        throw new Error("Failed to send message");
      } catch (error) {
        throw new Error(`Failed to send message: ${error.message}`);
      }
    };
  
    return {
      sendMessage,
    };
  };