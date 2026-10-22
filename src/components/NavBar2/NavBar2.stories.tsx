import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar2 } from "./NavBar2";
const meta = {
  title: "  ↳ Navigation 🆕/Nav Bar 2",
  component: NavBar2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
