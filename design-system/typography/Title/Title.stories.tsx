import Title from "./Title";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  component: Title,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleH1: Story = {
  args: {
    as: "h1",
    intent: "primary",
    size: "mainTitle",
    children: "This is an h1",
  },
};

export const TitleH2: Story = {
  args: {
    as: "h2",
    intent: "primary",
    size: "sectionTitle",
    children: "This is an h2",
  },
};

export const TitleH3: Story = {
  args: {
    as: "h3",
    intent: "primary",
    size: "textTitle",
    children: "This is an h3",
  },
};

export const TitleH4: Story = {
  args: {
    as: "h4",
    intent: "primary",
    size: "textSubtitle",
    children: "This is an h4",
  },
};

export const TitleH5: Story = {
  args: {
    as: "h5",
    intent: "primary",
    size: "textSubtitle",
    children: "This is an h5",
  },
};
