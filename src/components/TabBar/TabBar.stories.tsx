import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabBar } from "./TabBar";
const meta = {
  title: "Input/Tab bar",
  component: TabBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Simple",
    number: 2,
    selected: 1,
    mode: "Light",
    items: [
      { sideIcon: false, topIcon: false, mode: "Light", value: "1" },
      { sideIcon: false, topIcon: false, mode: "Light", value: "2" },
      { sideIcon: false, topIcon: false, mode: "Light", value: "3" },
      { sideIcon: false, topIcon: false, mode: "Light", value: "4" },
      { sideIcon: false, topIcon: false, mode: "Light", value: "5" },
    ],
  },
};
