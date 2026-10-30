import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewUXfolioSubscription2 } from "./SubscriptionPreviewUXfolioSubscription2";
const meta = {
  title: "Panel/Subscription preview / UXfolio subscription 2",
  component: SubscriptionPreviewUXfolioSubscription2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewUXfolioSubscription2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { timeline: "Normal", canceled: "False", discount: "False" },
};
