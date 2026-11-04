import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchField } from "./SwitchField";
import { expect, userEvent, within } from "storybook/test";
const isChecked = (el: HTMLElement) =>
  (el as HTMLInputElement).checked === true ||
  ["aria-checked", "aria-pressed", "aria-selected"].some(
    (attribute) => el.getAttribute(attribute) === "true",
  );
const meta = {
  title: "Inputs/Switch Field",
  component: SwitchField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SwitchField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    description: "Description",
    hasLabel: true,
    label: "Label",
    hasDescription: true,
  },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const WithLabelAndDescription: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Enable notifications",
    hasDescription: true,
    description: "Receive alerts for new messages",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Enable notifications")[0]).toBeVisible();
    await expect(
      canvas.getAllByText("Enable notifications")[0],
    ).toHaveTextContent("Enable notifications");
    await expect(
      canvas.getAllByText("Receive alerts for new messages")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Receive alerts for new messages")[0],
    ).toHaveTextContent("Receive alerts for new messages");
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(true);
  },
};
export const ToggleOnAndOff: Story = {
  args: { ...Default.args, hasLabel: true, label: "Dark mode" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(false);
  },
};
export const RequiredUncheckedThenChecked: Story = {
  args: {
    ...Default.args,
    required: true,
    hasLabel: true,
    label: "Accept terms",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("switch")[0]);
    await expect(isChecked(canvas.getAllByRole("switch")[0])).toBe(true);
  },
};
