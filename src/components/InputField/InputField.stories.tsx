import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";
const meta = {
  title: "Inputs/Input Field",
  component: InputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InputField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: false,
    label: "Label",
    error: "Error",
    hasDescription: false,
    description: "Description",
    value: "Value",
    state: "Default",
    valueType: "Default",
  },
};
