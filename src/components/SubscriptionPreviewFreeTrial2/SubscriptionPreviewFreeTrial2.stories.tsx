import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewFreeTrial2 } from "./SubscriptionPreviewFreeTrial2";
const meta = {
  title: "Panel/Subscription preview / Free trial 2",
  component: SubscriptionPreviewFreeTrial2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewFreeTrial2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { timeline: "Normal" } };
