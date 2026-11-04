import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "./FilterBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Filters/Filter bar",
  component: FilterBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const HoverRevealsToolbar: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("toolbar")[0]);
    await expect(canvas.getAllByRole("toolbar")[0]).toBeVisible();
  },
};
