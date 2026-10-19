import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePickerField } from "./DatePickerField";
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
