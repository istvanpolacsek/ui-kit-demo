import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarMonthField } from "./CalendarMonthField";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Calendar/Calendar Month Field",
  component: CalendarMonthField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarMonthField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: false,
    label: "Label",
    options: [
      { value: "January", label: "January" },
      { value: "February", label: "February" },
      { value: "March", label: "March" },
      { value: "April", label: "April" },
      { value: "May", label: "May" },
      { value: "June", label: "June" },
      { value: "July", label: "July" },
      { value: "August", label: "August" },
      { value: "September", label: "September" },
      { value: "October", label: "October" },
      { value: "November", label: "November" },
      { value: "December", label: "December" },
    ],
    placeholder: "September",
  },
};
export const Selected: Story = { args: { ...Default.args, value: "January" } };
export const Open: Story = { args: { ...Default.args, open: true } };

export const Disabled: Story = {
  args: { ...Default.args, disabled: true, hasLabel: true, label: "Month" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(true);
  },
};
export const WithPlaceholder: Story = {
  args: { ...Default.args, placeholder: "Select a month" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("combobox")[0].focus();
    await expect(canvas.getAllByRole("combobox")[0]).toHaveFocus();
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(false);
  },
};
