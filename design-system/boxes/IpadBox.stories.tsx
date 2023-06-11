import IpadBox from "./IpadBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IpadBox> = {
  component: IpadBox,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const simpleIpadBox: Story = {
  render: (args) => (
    <div>
      <p className="mb-10 font-semibold text-white/80">
        Simple Ipad Box example
      </p>
      <IpadBox {...args}>
        <div className="h-80 w-full rounded-xl bg-white"></div>
      </IpadBox>
    </div>
  ),
};
