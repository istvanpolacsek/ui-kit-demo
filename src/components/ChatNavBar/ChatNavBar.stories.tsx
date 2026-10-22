import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatNavBar } from "./ChatNavBar";
const meta = {
  title: "  ↳ Chat Assistance 🆕/Chat Nav Bar",
  component: ChatNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
