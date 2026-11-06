import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterItem } from "./FilterItem";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Filter Item",
  component: FilterItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { isActive: false, label: "Item" } };

export const CustomLabel: Story = {
  args: { ...Default.args, label: "Category" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Category" })[0],
    ).toHaveTextContent("Category");
  },
};
export const ActiveWithLongLabel: Story = {
  args: { ...Default.args, isActive: true, label: "Recently updated items" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Recently updated items" })[0],
    ).toHaveTextContent("Recently updated items");
    canvas
      .getAllByRole("button", { name: "Recently updated items" })[0]
      .focus();
    await expect(
      canvas.getAllByRole("button", { name: "Recently updated items" })[0],
    ).toHaveFocus();
  },
};
