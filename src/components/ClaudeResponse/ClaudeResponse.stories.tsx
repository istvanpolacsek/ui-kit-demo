import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClaudeResponse } from "./ClaudeResponse";
const meta = {
  title: "🖥️ Desktop web components/Claude response",
  component: ClaudeResponse,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ClaudeResponse>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
