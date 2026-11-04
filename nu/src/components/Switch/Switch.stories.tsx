import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { expect, userEvent, within } from "storybook/test";
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "  ↳ Controls/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Enabled" } };
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const ToggleOnAndOff: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(false);
  },
};
export const Required: Story = {
  args: { ...Default.args, required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("switch")[0].focus();
    await expect(canvas.getAllByRole("switch")[0]).toHaveFocus();
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(true);
  },
};
