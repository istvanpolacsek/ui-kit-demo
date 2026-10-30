import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModuleDivider } from "./ModuleDivider";
const meta = {
  title: "Input/Module divider",
  component: ModuleDivider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    side: {
      control: "select",
      options: ["Left image", "Normal", "Right image"],
    },
  },
} satisfies Meta<typeof ModuleDivider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    canAddModule: true,
    canResize: true,
    size: 0,
    state: "Default",
    mode: "Light",
    side: "Normal",
  },
};
