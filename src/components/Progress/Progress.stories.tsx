import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { label: "Label", amount: "€00k", progress: 0 },
};

export const CustomLabelAndAmount: Story = {
  args: { ...Default.args, label: "Revenue", amount: "€50k" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Revenue")[0]).toHaveTextContent(
      "Revenue",
    );
    await expect(canvas.getAllByText("€50k")[0]).toHaveTextContent("€50k");
  },
};
