import type { Meta, StoryObj } from "@storybook/react-vite";
import { Send } from "./Send";
const meta = {
  title: "Visual asset/Send",
  component: Send,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Send>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
