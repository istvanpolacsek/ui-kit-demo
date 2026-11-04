import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagToggle } from "./TagToggle";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Tags/Tag Toggle",
  component: TagToggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof TagToggle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showIcon: true, icon: "Check", label: "Label" },
};
export const Selected: Story = { args: { ...Default.args, selected: true } };

export const WithIcon: Story = {
  args: { ...Default.args, showIcon: true, label: "Label" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("tab", { name: "Label" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("tab", { name: "Label" })[0]);
    await expect(
      canvas.getAllByRole("tab", { name: "Label" })[0],
    ).toHaveFocus();
  },
};
export const KeyboardFocus: Story = {
  args: { ...Default.args, label: "Label" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("tab", { name: "Label" })[0].focus();
    await expect(
      canvas.getAllByRole("tab", { name: "Label" })[0],
    ).toHaveFocus();
  },
};
export const ClickToSelect: Story = {
  args: { ...Default.args, label: "Label", selected: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("tab", { name: "Label" })[0]);
    await expect(
      canvas.getAllByRole("tab", { name: "Label" })[0],
    ).toHaveFocus();
  },
};
