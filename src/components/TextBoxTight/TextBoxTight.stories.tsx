import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBoxTight } from "./TextBoxTight";
const meta = {
  title: "Module/Text box / Tight",
  component: TextBoxTight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextBoxTight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasToolbar: false,
    reachingLimit: false,
    colorOverride: false,
    state: "Default",
    mode: "Light",
  },
};
