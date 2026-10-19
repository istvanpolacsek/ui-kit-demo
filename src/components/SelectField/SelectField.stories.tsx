import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectField } from "./SelectField";
const meta = {
  title: "Inputs/Select Field",
  component: SelectField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SelectField>;
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
    options: [
      { value: "Hello World", label: "Hello World" },
      { value: "Option 2", label: "Option 2" },
      { value: "Option 3", label: "Option 3" },
      { value: "Option 4", label: "Option 4" },
      { value: "Option 5", label: "Option 5" },
    ],
    placeholder: "Value",
  },
};
export const Selected: Story = {
  args: { ...Default.args, value: "Hello World" },
};
export const Open: Story = { args: { ...Default.args, open: true } };
