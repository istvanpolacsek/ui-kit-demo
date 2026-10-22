import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBarLink } from "./NavBarLink";
const meta = {
  title: "  ↳ Navigation 🆕/Nav Bar Link",
  component: NavBarLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBarLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
