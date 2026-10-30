import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewFreeTrial } from "./SubscriptionPreviewFreeTrial";
const meta = {
  title: "Panel/Subscription preview / Free trial",
  component: SubscriptionPreviewFreeTrial,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewFreeTrial>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Free trial active" } };
