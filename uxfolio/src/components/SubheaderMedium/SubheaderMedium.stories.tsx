import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubheaderMedium } from "./SubheaderMedium";
const meta = {
  title: "Panel/Subheader / Medium",
  component: SubheaderMedium,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubheaderMedium>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasTag: false, hasIcon: false, mode: "Light" },
};
