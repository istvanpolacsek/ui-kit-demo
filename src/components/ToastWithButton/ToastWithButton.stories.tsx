import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastWithButton } from "./ToastWithButton";
const meta = {
  title: "Overlay/Toast / With button",
  component: ToastWithButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToastWithButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error" } };
