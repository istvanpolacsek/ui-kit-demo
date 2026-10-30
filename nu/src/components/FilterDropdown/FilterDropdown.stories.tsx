import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterDropdown } from "./FilterDropdown";
const meta = {
  title: "  ↳ Filters/Filter Dropdown",
  component: FilterDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
