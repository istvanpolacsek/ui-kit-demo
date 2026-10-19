import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserMessage } from "./UserMessage";
const meta = {
  title: "🖥️ Desktop web components/User message",
  component: UserMessage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
