import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopDropdown } from "./DesktopDropdown";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Dropdown/Desktop / Dropdown",
  component: DesktopDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };

export const Open: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(canvas.getAllByRole("combobox")[0]).toBeVisible();
  },
};
