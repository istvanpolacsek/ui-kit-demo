import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "./FilterBar";
const meta = {
  component: FilterBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      { label: "New leads", isActive: true },
      { label: "Qualified", isActive: true },
      { label: "Won & Signed", isActive: false },
      { label: "Completed", isActive: true },
      { label: "Archive", isActive: false },
    ],
  },
};
