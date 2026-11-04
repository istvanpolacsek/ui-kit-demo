import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopDropdownMaster } from "./DesktopDropdownMaster";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Dropdown/.Desktop-Dropdown/Master",
  component: DesktopDropdownMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopDropdownMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showOptions: true, showHelperText: true, showLabel: true },
};

export const OpensDropdownOnClick: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(canvas.getAllByRole("combobox")[0]).toBeVisible();
  },
};
export const WithOptionsVisible: Story = {
  args: { ...Default.args, showOptions: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(false);
  },
};
