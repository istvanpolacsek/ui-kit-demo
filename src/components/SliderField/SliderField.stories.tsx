import type { Meta, StoryObj } from "@storybook/react-vite";
import { SliderField } from "./SliderField";
const meta = {
  title: "Inputs/Slider Field",
  component: SliderField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SliderField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Label",
    description: "Description",
    hasLabel: true,
    hasDescription: true,
  },
};
