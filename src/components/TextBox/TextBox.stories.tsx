import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBox } from "./TextBox";
const meta = {
  title: "Module/Text box",
  component: TextBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    state: {
      control: "select",
      options: ["Default", "Hover", "Active", "Editing", "Passive"],
    },
    mode: { control: "select", options: ["Dark", "Light"] },
  },
} satisfies Meta<typeof TextBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "Flexible",
    hasButton: false,
    reachingLimit: false,
    aboveImage: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
  },
};
