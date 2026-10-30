import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserDividerBold } from "./UserDividerBold";
const meta = {
  title: "Module/User divider / Bold",
  component: UserDividerBold,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserDividerBold>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
