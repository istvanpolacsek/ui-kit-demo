import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatUserMessage } from "./AIChatUserMessage";
const meta = {
  title: "AI Chat/AI Chat -> User message",
  component: AIChatUserMessage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatUserMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
