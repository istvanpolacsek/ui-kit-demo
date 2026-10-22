import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorLoading } from "./IndicatorLoading";
const meta = {
  title: "Visual asset/Indicator / Loading",
  component: IndicatorLoading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorLoading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Light" } };
