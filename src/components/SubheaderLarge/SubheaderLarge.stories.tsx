import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubheaderLarge } from "./SubheaderLarge";
const meta = {
  title: "Panel/Subheader / Large",
  component: SubheaderLarge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubheaderLarge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasTag: false, hasIcon: false, hasSwitch: false, mode: "Light" },
};
