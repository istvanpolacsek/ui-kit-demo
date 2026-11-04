import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePickerField } from "./DatePickerField";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Inputs/Date Picker Field",
  component: DatePickerField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DatePickerField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: true,
    label: "Label",
    error: "Error",
    description: "Description",
    hasDescription: false,
    value: "Value",
    state: "Default",
    valueType: "Default",
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Date of Birth",
    hasDescription: true,
    description: "Enter your date of birth",
    valueType: "Placeholder",
    value: "MM/DD/YYYY",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Date of Birth")[0]).toBeVisible();
    await expect(canvas.getAllByText("Date of Birth")[0]).toHaveTextContent(
      "Date of Birth",
    );
    await expect(
      canvas.getAllByText("Enter your date of birth")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Enter your date of birth")[0],
    ).toHaveTextContent("Enter your date of birth");
    canvas.getAllByRole("textbox")[0].focus();
    await expect(canvas.getAllByRole("textbox")[0]).toHaveFocus();
  },
};
