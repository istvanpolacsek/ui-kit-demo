import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
const meta = {
  title: "📱 Mobile components/input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    attachments: false,
    cursor: false,
    jumpToBottom: false,
    state: "Resting",
  },
};
