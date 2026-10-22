import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserDividerMedium } from "./UserDividerMedium";
const meta = {
  title: "Module/User divider / Medium",
  component: UserDividerMedium,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserDividerMedium>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
