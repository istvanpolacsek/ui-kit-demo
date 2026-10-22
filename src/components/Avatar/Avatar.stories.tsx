import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
const meta = {
  title: "  ↳ Avatar / Avatar Group 🆕/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", type: "Image" } };
