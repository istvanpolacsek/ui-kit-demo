import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesAIChat } from "./ExamplesAIChat";
const meta = {
  title: "Examples/Examples/AI Chat",
  component: ExamplesAIChat,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesAIChat>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
