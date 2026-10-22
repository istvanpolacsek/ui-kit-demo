import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagSpecialSubscription } from "./TagSpecialSubscription";
const meta = {
  title: "Visual asset/Tag / Special / Subscription",
  component: TagSpecialSubscription,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagSpecialSubscription>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { property1: "Special", property2: "Trial" },
};
