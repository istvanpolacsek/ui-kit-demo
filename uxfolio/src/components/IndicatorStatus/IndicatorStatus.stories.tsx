import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorStatus } from "./IndicatorStatus";
const meta = {
  title: "Visual asset/Indicator / Status",
  component: IndicatorStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Positive", mode: "Dark" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
