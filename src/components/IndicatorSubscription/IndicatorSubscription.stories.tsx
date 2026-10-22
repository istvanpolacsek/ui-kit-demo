import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorSubscription } from "./IndicatorSubscription";
const meta = {
  title: "Visual asset/Indicator / Subscription",
  component: IndicatorSubscription,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorSubscription>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "Indicator", property2: "Warning" },
};
