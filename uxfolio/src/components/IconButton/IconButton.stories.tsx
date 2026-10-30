import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
const meta = {
  title: "Button/Icon button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { importance: "Low", mode: "Light" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
