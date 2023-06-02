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
import { trpc } from "../../../utils/trpc";

const Chat: FC = () => {
  // const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  // if (isLoading || isFetching) {
  //   return <p>Loading...</p>;
  // }

  // console.log(users);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-gray border rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-white/60 bg-gray">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                {/* <ChatMessages className='px-2 py-3 flex-1' /> */}
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
