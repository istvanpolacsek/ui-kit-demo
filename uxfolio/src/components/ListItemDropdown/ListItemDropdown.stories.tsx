import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemDropdown } from "./ListItemDropdown";
const meta = {
  title: "Panel/List item / Dropdown",
  component: ListItemDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasIcon: true,
    hasStatus: false,
    hasPlusLock: false,
    type: "Decisive",
    mode: "Light",
  },
};
