import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastLightTextOnly } from "./ToastLightTextOnly";
const meta = {
  title: "Overlay/Toast / Light / Text only",
  component: ToastLightTextOnly,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToastLightTextOnly>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error" } };
