import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBarItem } from "./OptionBarItem";
const meta = {
  title: "Button/Option bar item",
  component: OptionBarItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBarItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Text" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
