import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBarLabeled } from "./OptionBarLabeled";
const meta = {
  title: "Input/Option bar / Labeled",
  component: OptionBarLabeled,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    optionBarOnlyBarNumber: { control: "select", options: [2, 3, 4, 5] },
    optionBarOnlyBarActive: { control: "select", options: [1, 2, 3, 4, 5] },
    optionBarOnlyBarType: { control: "select", options: ["Text", "Icon"] },
    optionBarOnlyBar2Number: { control: "select", options: [2, 3, 4, 5] },
    optionBarOnlyBar2Active: { control: "select", options: [1, 2, 3, 4, 5] },
    optionBarOnlyBar2Type: { control: "select", options: ["Text", "Icon"] },
    optionBarOnlyBar3Number: { control: "select", options: [2, 3, 4, 5] },
    optionBarOnlyBar3Active: { control: "select", options: [1, 2, 3, 4, 5] },
    optionBarOnlyBar3Type: { control: "select", options: ["Text", "Icon"] },
  },
} satisfies Meta<typeof OptionBarLabeled>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasDescription: false,
    number: "1 option",
    optionBarOnlyBarNumber: 4,
    optionBarOnlyBarActive: 1,
    optionBarOnlyBarType: "Text",
    optionBarOnlyBar2Number: 3,
    optionBarOnlyBar2Active: 1,
    optionBarOnlyBar2Type: "Icon",
    optionBarOnlyBar3Number: 3,
    optionBarOnlyBar3Active: 1,
    optionBarOnlyBar3Type: "Icon",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
