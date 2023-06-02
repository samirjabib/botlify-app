import {create} from 'zustand'
import { nanoid } from 'nanoid'
import { Message } from '../../../../lib/validators/message'


type MessagesState = {
  messages: Message[]
  isMessageUpdating: boolean
  addMessage: (message: Message) => void
  removeMessage: (id: string) => void
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void
  setIsMessageUpdating: (isUpdating: boolean) => void
}

const useMessagesStore = create<MessagesState>((set) => ({
    messages: [
      {
        id: nanoid(),
        text: 'Hello, how can I help you?',
        isUserMessage: false,
      },
    ],
    isMessageUpdating: false,
    addMessage: (message) =>
      set((state) => ({ messages: [...state.messages, message] })),
    removeMessage: (id) =>
      set((state) => ({
        messages: state.messages.filter((message) => message.id !== id),
      })),
    updateMessage: (id, updateFn) =>
      set((state) => ({
        messages: state.messages.map((message) => {
          if (message.id === id) {
            return { ...message, text: updateFn(message.text) }
          }
          return message
        }),
      })),
    setIsMessageUpdating: (isUpdating) => set(() => ({ isMessageUpdating: isUpdating })),
  }))


  export default useMessagesStore