import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterDropdown } from "./FilterDropdown";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Filters/Filter Dropdown",
  component: FilterDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };

export const OpensOnClick: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
export const AlreadyOpen: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
