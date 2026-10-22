import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastLightWithButton } from "./ToastLightWithButton";
const meta = {
  title: "Overlay/Toast / Light / With button",
  component: ToastLightWithButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToastLightWithButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error" } };
