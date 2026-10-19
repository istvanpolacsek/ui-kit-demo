import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
const meta = {
  title: "Avatars/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { initials: "F", type: "Image", size: "Large", shape: "Circle" },
};
