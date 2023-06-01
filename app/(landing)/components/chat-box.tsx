import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { FC } from "react";

export const ChatBox: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem>
        <div className="fixed right-8 w-80 bottom-8 bg-white border rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              hello
            </AccordionTrigger>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

