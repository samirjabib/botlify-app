import { nanoid } from 'nanoid';

export const addMessage = (message) => {
  // Implementation for adding a message to the state
};

export const updateMessage = (id, text) => {
  // Implementation for updating a message in the state
};

export const removeMessage = (id) => {
  // Implementation for removing a message from the state
};

export const generateResponseMessage = () => {
  const id = nanoid();
  return {
    id,
    isUserMessage: false,
    text: '',
  };
};