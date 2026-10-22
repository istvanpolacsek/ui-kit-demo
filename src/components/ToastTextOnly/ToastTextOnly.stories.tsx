import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastTextOnly } from "./ToastTextOnly";
const meta = {
  title: "Overlay/Toast / Text only",
  component: ToastTextOnly,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToastTextOnly>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error" } };
