import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubheaderSmall } from "./SubheaderSmall";
const meta = {
  title: "Panel/Subheader / Small",
  component: SubheaderSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubheaderSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasIcon: false, mode: "Light" } };
