import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterItem } from "./FilterItem";
const meta = {
  title: "  ↳ Filters 🆕/Filter Item",
  component: FilterItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
