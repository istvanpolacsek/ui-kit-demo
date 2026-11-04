import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationNumber } from "./PaginationNumber";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Pagination/Pagination Number",
  component: PaginationNumber,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationNumber>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };

export const ActiveState: Story = {
  args: { ...Default.args, state: "Active" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const HoverInteraction: Story = {
  args: { ...Default.args, state: "Hover" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const FocusedActiveState: Story = {
  args: { ...Default.args, state: "Focused Active" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
