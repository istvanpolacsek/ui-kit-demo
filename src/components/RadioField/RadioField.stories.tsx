import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioField } from "./RadioField";
import { expect, userEvent, within } from "storybook/test";
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "Inputs/Radio Field",
  component: RadioField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasDescription: true, description: "Description", label: "Label" },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const WithDescription: Story = {
  args: {
    ...Default.args,
    hasDescription: true,
    description: "Choose this option if it applies to you",
    label: "Label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Choose this option if it applies to you")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Choose this option if it applies to you")[0],
    ).toHaveTextContent("Choose this option if it applies to you");
    await userEvent.click(canvas.getAllByRole("radio")[0]);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
  },
};
export const Required: Story = {
  args: { ...Default.args, required: true, label: "Label" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("radio")[0].focus();
    await expect(canvas.getAllByRole("radio")[0]).toHaveFocus();
    await userEvent.click(canvas.getAllByRole("radio")[0]);
    await expect(isChecked(canvas.getAllByRole("radio")[0])).toBe(true);
  },
};
