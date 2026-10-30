import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorImageOrder } from "./IndicatorImageOrder";
const meta = {
  title: "Visual asset/Indicator / Image order",
  component: IndicatorImageOrder,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorImageOrder>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Active", size: "Small", mode: "Dark" },
};
