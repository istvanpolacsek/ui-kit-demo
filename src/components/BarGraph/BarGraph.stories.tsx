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

export const HighProgress: Story = {
  args: { ...Default.args, progress: 90, amount: "€90k", label: "Savings" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("progressbar")[0]).toBeVisible();
    await expect(canvas.getAllByText("€90k")[0]).toHaveTextContent("€90k");
    await expect(canvas.getAllByText("Savings")[0]).toHaveTextContent(
      "Savings",
    );
  },
};
export const LowProgressWithCustomLabel: Story = {
  args: { ...Default.args, progress: 10, amount: "€1k", label: "Expenses" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("€1k")[0]).toHaveTextContent("€1k");
    await expect(canvas.getAllByText("Expenses")[0]).toHaveTextContent(
      "Expenses",
    );
  },
};
