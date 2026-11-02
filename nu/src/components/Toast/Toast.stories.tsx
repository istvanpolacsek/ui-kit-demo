import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";
const meta = {
  title: "  ↳ Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Error", device: "Desktop" } };
