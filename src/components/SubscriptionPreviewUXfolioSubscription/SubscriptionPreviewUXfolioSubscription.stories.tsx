import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewUXfolioSubscription } from "./SubscriptionPreviewUXfolioSubscription";
const meta = {
  title: "Panel/Subscription preview / UXfolio subscription",
  component: SubscriptionPreviewUXfolioSubscription,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewUXfolioSubscription>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Yearly Active" } };
