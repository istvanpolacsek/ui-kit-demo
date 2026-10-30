import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tags } from "./Tags";
const meta = {
  title: "  ↳ Tags/Tags",
  component: Tags,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tags>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    icon: true,
    value: "Tags",
    state: "Default",
    type: "RoyalBlue",
    size: "Large",
  },
};
