import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "  ↳ Controls/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const DefaultUncheckedTogglesOnClick: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(false);
  },
};
export const DefaultCheckedCanBeUnchecked: Story = {
  args: { ...Default.args, defaultChecked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(false);
  },
};
export const DisabledCheckedStaysChecked: Story = {
  args: { ...Default.args, disabled: true, defaultChecked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
    await expect(isDisabled(canvas.getAllByRole("checkbox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
  },
};
