import type { Meta, StoryObj } from "@storybook/react-vite";
import { FABNeutral } from "./FABNeutral";
const meta = {
  title: "Button/FAB / Neutral",
  component: FABNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    side: { control: "select", options: ["Left", "Right", "Bottom", "Top"] },
    tooltipContainerMode: {
      control: "select",
      options: ["Light", "Dark", "Destructive"],
    },
  },
} satisfies Meta<typeof FABNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    state: "Default",
    size: "Regular",
    mode: "Light",
    side: "Left",
    tooltipContainerMode: "Light",
  },
};
