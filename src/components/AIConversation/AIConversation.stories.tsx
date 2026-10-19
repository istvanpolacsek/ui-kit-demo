import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIConversation } from "./AIConversation";
const meta = {
  title: "AI Chat/AI -> Conversation",
  component: AIConversation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIConversation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
