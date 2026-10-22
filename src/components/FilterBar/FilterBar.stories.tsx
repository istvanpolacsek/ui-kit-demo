import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "./FilterBar";
const meta = {
  title: "  ↳ Filters 🆕/Filter bar",
  component: FilterBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
