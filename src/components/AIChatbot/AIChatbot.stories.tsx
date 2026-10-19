import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatbot } from "./AIChatbot";
const meta = {
  title: "Sections/AI Chatbot",
  component: AIChatbot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatbot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
