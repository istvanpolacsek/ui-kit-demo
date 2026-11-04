import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInputField } from "./DateInputField";
const meta = {
  title: "Inputs/Date Input Field",
  component: DateInputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DateInputField>;
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
    day: "DD",
    month: "MM",
    year: "YYYY",
  },
};
