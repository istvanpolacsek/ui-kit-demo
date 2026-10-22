import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagSubscription } from "./TagSubscription";
const meta = {
  title: "Visual asset/Tag / Subscription",
  component: TagSubscription,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TagSubscription>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Upgrade default" } };
