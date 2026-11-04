import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./Menu";
const meta = {
  title: "Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
