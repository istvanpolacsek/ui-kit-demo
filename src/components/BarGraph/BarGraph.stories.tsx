import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarGraph } from "./BarGraph";
const meta = {
  component: BarGraph,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof BarGraph>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { amount: "€10k", label: "Label", progress: 10 },
};
