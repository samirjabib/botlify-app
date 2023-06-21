import { FC } from "react";

export const ChatHeader: FC = () => {
  return (
    <div className="w-full flex gap-3 justify-start items-center bg-gray">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs text-white/80">Chat with</p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium text-white">Samir Bot V1</p>
        </div>
      </div>
    </div>
  );
};
