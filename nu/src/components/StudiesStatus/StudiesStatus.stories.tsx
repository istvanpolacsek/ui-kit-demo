import type { Meta, StoryObj } from "@storybook/react-vite";
import { StudiesStatus } from "./StudiesStatus";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Form/Studies Status",
  component: StudiesStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof StudiesStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };

export const OpenState: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const ClosedState: Story = {
  args: { ...Default.args, state: "Closed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
