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

export const ClickToActivate: Story = {
  args: { ...Default.args, isActive: false, label: "Item" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button", { name: "Item" })[0]);
    await expect(
      canvas.getAllByRole("button", { name: "Item" })[0],
    ).toHaveFocus();
  },
};
export const CustomLabel: Story = {
  args: { ...Default.args, label: "Price Range" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Price Range" })[0],
    ).toHaveTextContent("Price Range");
    await userEvent.click(
      canvas.getAllByRole("button", { name: "Price Range" })[0],
    );
  },
};
