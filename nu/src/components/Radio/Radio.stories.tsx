import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";
import { expect, userEvent, within } from "storybook/test";
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "  ↳ Controls/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const RequiredUncheckedThenChecked: Story = {
  args: { ...Default.args, required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("radio")[0]);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
  },
};
export const DefaultCheckedOnLoad: Story = {
  args: { ...Default.args, defaultChecked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("radio")[0]);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
  },
};
export const FocusAndSelectWithKeyboard: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("radio")[0].focus();
    await expect(canvas.getAllByRole("radio")[0]).toHaveFocus();
    await userEvent.keyboard(" ");
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
  },
};
