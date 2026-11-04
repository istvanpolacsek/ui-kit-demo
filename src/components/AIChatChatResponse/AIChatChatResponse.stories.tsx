import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatChatResponse } from "./AIChatChatResponse";
const meta = {
  title: "AI Chat/AI Chat -> Chat Response",
  component: AIChatChatResponse,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatChatResponse>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
