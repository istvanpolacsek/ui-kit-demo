import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxField } from "./CheckboxField";
import { expect, userEvent, within } from "storybook/test";
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "Inputs/Checkbox Field",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CheckboxField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasDescription: true, description: "Description", label: "Label" },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Indeterminate: Story = {
  args: { ...Default.args, indeterminate: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const RequiredWithLabel: Story = {
  args: { ...Default.args, label: "Accept terms", required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("checkbox")[0]).toBeVisible();
    await expect(canvas.getAllByText("Accept terms")[0]).toHaveTextContent(
      "Accept terms",
    );
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
  },
};
export const WithDescription: Story = {
  args: {
    ...Default.args,
    label: "Subscribe",
    hasDescription: true,
    description: "Receive weekly updates",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Receive weekly updates")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Receive weekly updates")[0],
    ).toHaveTextContent("Receive weekly updates");
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
  },
};
export const UncheckAfterDefaultChecked: Story = {
  args: { ...Default.args, defaultChecked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("checkbox")[0]);
    await expect(isChecked(canvas.getAllByRole("checkbox")[0])).toBe(false);
  },
};
