import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatCodeBlock } from "./AIChatCodeBlock";
const meta = {
  title: "AI Chat/AI Chat -> Code Block",
  component: AIChatCodeBlock,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatCodeBlock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
