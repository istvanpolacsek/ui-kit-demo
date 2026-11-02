import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressMain } from "./ProgressMain";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Progress / Main",
  component: ProgressMain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof ProgressMain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { progress: 0 } };

export const HalfComplete: Story = {
  args: { ...Default.args, progress: 50 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("progressbar")[0]).toBeVisible();
    await expect(canvas.getAllByRole("progressbar")[0]).toHaveTextContent("50");
  },
};
export const FullyComplete: Story = {
  args: { ...Default.args, progress: 100 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("progressbar")[0]).toBeVisible();
    await expect(canvas.getAllByRole("progressbar")[0]).toHaveTextContent(
      "100",
    );
  },
};
export const EmptyProgress: Story = {
  args: { ...Default.args, progress: 0 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("progressbar")[0]).toBeVisible();
    await expect(canvas.getAllByRole("progressbar")[0]).toHaveTextContent("0");
  },
};
