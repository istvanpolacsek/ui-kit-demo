import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatBox } from "./AIChatBox";
const meta = {
  title: "AI Chat/AI Chat Box",
  component: AIChatBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
