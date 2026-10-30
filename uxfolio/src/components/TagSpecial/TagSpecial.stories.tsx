import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagSpecial } from "./TagSpecial";
const meta = {
  title: "Visual asset/Tag / Special",
  component: TagSpecial,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagSpecial>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "Default portfolio", size: "Regular" },
};
