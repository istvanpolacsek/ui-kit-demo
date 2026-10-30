import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagSubscription2 } from "./TagSubscription2";
const meta = {
  title: "Visual asset/Tag / Subscription 2",
  component: TagSubscription2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagSubscription2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
