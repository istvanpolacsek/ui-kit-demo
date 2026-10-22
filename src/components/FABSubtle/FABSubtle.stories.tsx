import type { Meta, StoryObj } from "@storybook/react-vite";
import { FABSubtle } from "./FABSubtle";
const meta = {
  title: "Button/FAB / Subtle",
  component: FABSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    side: { control: "select", options: ["Left", "Right", "Bottom", "Top"] },
    tooltipContainerMode: {
      control: "select",
      options: ["Light", "Dark", "Destructive"],
    },
  },
} satisfies Meta<typeof FABSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "Regular",
    mode: "Light",
    side: "Left",
    tooltipContainerMode: "Light",
  },
};
