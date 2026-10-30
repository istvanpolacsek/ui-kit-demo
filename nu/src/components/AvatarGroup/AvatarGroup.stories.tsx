import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./AvatarGroup";
const meta = {
  title: "  ↳ Avatar / Avatar Group/Avatar Group",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large" } };
