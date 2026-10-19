import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarBlock } from "./AvatarBlock";
const meta = {
  title: "Avatars/Avatar Block",
  component: AvatarBlock,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarBlock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { title: "Title", description: "Description" },
};
