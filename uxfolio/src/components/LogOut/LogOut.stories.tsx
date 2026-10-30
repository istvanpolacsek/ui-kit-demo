import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogOut } from "./LogOut";
const meta = {
  title: "Visual asset/Log out",
  component: LogOut,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogOut>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
