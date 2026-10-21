import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatTitlebar } from "./ChatTitlebar";
const meta = {
  title: "🖥️ Desktop web components/Chat titlebar",
  component: ChatTitlebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatTitlebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
