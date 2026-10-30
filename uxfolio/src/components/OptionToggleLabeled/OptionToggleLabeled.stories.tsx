import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionToggleLabeled } from "./OptionToggleLabeled";
const meta = {
  title: "Input/Option toggle / labeled",
  component: OptionToggleLabeled,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    optionToggleToggleItemState: { control: "select", options: ["Off", "On"] },
    optionToggleToggleItem2State: { control: "select", options: ["Off", "On"] },
    optionToggleToggleItem3State: { control: "select", options: ["Off", "On"] },
    optionToggleToggleItem4State: { control: "select", options: ["Off", "On"] },
  },
} satisfies Meta<typeof OptionToggleLabeled>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    numberOfItems: 1,
    optionToggleToggleItemState: "Off",
    optionToggleToggleItem2State: "Off",
    optionToggleToggleItem3State: "Off",
    optionToggleToggleItem4State: "Off",
  },
};
