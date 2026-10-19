import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
const meta = {
  title: "Sections/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    iconButtonVariant: {
      control: "select",
      options: ["Primary", "Neutral", "Subtle"],
    },
    iconButtonSize: { control: "select", options: ["Medium", "Small"] },
    iconButton2Variant: {
      control: "select",
      options: ["Primary", "Neutral", "Subtle"],
    },
    iconButton2Size: { control: "select", options: ["Medium", "Small"] },
  },
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    platform: "Desktop",
    state: "Default",
    iconButtonIcon: "X",
    iconButtonVariant: "Subtle",
    iconButtonSize: "Medium",
    iconButton2Icon: "Menu",
    iconButton2Variant: "Subtle",
    iconButton2Size: "Small",
  },
};
