import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItemAccount } from "./MenuItemAccount";
const meta = {
  title: "Panel/Menu item / Account",
  component: MenuItemAccount,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuItemAccount>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Karma", mode: "Dark" } };
