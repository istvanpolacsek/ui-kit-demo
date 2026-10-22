import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewDomainSubscription } from "./SubscriptionPreviewDomainSubscription";
const meta = {
  title: "Panel/Subscription preview / Domain subscription",
  component: SubscriptionPreviewDomainSubscription,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewDomainSubscription>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { canceled: "False", connected: "True" },
};
