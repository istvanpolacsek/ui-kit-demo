import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBoxRegular } from "./TextBoxRegular";
const meta = {
  title: "Module/Text box / Regular",
  component: TextBoxRegular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    userButtonTextPrimaryState: {
      control: "select",
      options: ["Default", "Active", "Hover in view", "Hover"],
    },
    roundness: { control: "select", options: ["Sharp", "Round", "Pill"] },
    userButtonTextPrimaryMode: {
      control: "select",
      options: ["Light", "Dark"],
    },
  },
} satisfies Meta<typeof TextBoxRegular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasButton: false,
    reachingLimit: false,
    aboveImage: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
    userButtonTextPrimaryReachingLimit: false,
    colorOverride: false,
    userButtonTextPrimaryState: "Default",
    roundness: "Sharp",
    userButtonTextPrimaryMode: "Light",
  },
};
