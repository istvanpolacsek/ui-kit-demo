import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxModular } from "./OptionBoxModular";
const meta = {
  title: "Input/Option box / Modular",
  component: OptionBoxModular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    colorStyleType: { control: "select", options: ["Solid", "Gradient"] },
    style: {
      control: "select",
      options: [
        "Accent",
        "Accent platform",
        "Contrast",
        "Platform",
        "Subtle",
        "Custom",
      ],
    },
  },
} satisfies Meta<typeof OptionBoxModular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "Suggested color", colorStyleType: "Solid", style: "Subtle" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
