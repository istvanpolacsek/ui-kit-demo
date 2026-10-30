import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageAlert } from "./MessageAlert";
const meta = {
  title: "Panel/Message / Alert",
  component: MessageAlert,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MessageAlert>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasTitle: true, hasIcon: true, type: "Info", mode: "Light" },
};
