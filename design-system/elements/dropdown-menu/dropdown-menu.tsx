import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Check, Dot, LogOut, User } from "lucide-react";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {<button className="">{children}</button>}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-darkGray backdrop-blur-2xl border shadow-lg border-white/20 rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group text-white text-[13px]  leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] cursor-pointer transition-all hover:bg-hoverBlue hover:text-white">
            Account Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-white text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 transition-all hover:bg-hoverBlue hover:text-white">
            Dashboard
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-white text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 transition-all hover:bg-hoverBlue hover:text-white">
            Content Managment
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="group text-white text-[13px] leading-none  rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none transition-all data-[state=open]:bg-blue data-[state=open]:text-white hover:text-white">
              Tools
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                <ArrowRight size={13} />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] bg-darkGray backdrop-blur-2xl border border-white/20 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="group text-white text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none cursor-pointer transition-all hover:bg-hoverBlue hover:text-white">
                  Generate Blog AI
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] text-white leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none cursor-pointer transition-all hover:bg-hoverBlue hover:text-white">
                  Generate Marketing AI
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] text-white leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none cursor-pointer transition-all hover:bg-hoverBlue hover:text-white">
                  Generate Images AI
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
