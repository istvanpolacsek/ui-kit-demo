import type { Meta, StoryObj } from "@storybook/react-vite";
import { FABDestructive } from "./FABDestructive";
const meta = {
  title: "Button/FAB / Destructive",
  component: FABDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    side: { control: "select", options: ["Left", "Right", "Bottom", "Top"] },
    tooltipContainerMode: {
      control: "select",
      options: ["Light", "Dark", "Destructive"],
    },
  },
} satisfies Meta<typeof FABDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "Regular",
    mode: "Light",
    side: "Left",
    tooltipContainerMode: "Destructive",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
