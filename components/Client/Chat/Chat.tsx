"use client";

import { FC } from "react";
import { ChatHeader } from "./ChatHeader";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/Accordion";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat: FC = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="fixed sm:right-8 w-80 bottom-8 bg-gray  rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b-[0.5px] border-white/30 bg-gray">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <ChatMessages className="px-2 py-3 flex-1" />
                <ChatInput className="px-6" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
