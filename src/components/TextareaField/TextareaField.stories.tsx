import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextareaField } from "./TextareaField";
const meta = {
  title: "Inputs/Textarea Field",
  component: TextareaField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextareaField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: false,
    label: "Label",
    error: "Hint",
    description: "Description",
    hasDescription: false,
    value: "Value",
    state: "Default",
    valueType: "Default",
  },
};
