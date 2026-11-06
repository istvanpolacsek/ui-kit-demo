import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarGraph } from "./BarGraph";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Bar Graph",
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

export const CustomAmountAndLabel: Story = {
  args: { ...Default.args, amount: "€25k", label: "Revenue" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("€25k")[0]).toHaveTextContent("€25k");
    await expect(canvas.getAllByText("Revenue")[0]).toHaveTextContent(
      "Revenue",
    );
  },
};
export const HalfProgress: Story = {
  args: { ...Default.args, progress: 50, amount: "€5k", label: "Budget used" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("€5k")[0]).toHaveTextContent("€5k");
    await expect(canvas.getAllByText("Budget used")[0]).toHaveTextContent(
      "Budget used",
    );
  },
};
