import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionPreviewDomainCancellation } from "./SubscriptionPreviewDomainCancellation";
const meta = {
  title: "Panel/Subscription preview / Domain cancellation",
  component: SubscriptionPreviewDomainCancellation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubscriptionPreviewDomainCancellation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
