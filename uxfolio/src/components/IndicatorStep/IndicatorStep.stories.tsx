import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorStep } from "./IndicatorStep";
const meta = {
  title: "Visual asset/Indicator / Step",
  component: IndicatorStep,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorStep>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
