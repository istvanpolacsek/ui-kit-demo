import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar } from "./NavBar";
const meta = {
  title: "  ↳ Navigation 🆕/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", state: "Closed" } };
