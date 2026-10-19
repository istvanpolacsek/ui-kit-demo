import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatInput } from "./ChatInput";
const meta = {
  title: "🖥️ Desktop web components/Chat input",
  component: ChatInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Multiline" } };
