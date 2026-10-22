import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatBubble } from "./ChatBubble";
const meta = {
  title: "  ↳ Chat Assistance 🆕/Chat bubble",
  component: ChatBubble,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatBubble>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showRichTooltip: true, state: "Closed" },
};
