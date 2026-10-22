import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubheaderTiny } from "./SubheaderTiny";
const meta = {
  title: "Panel/Subheader / Tiny",
  component: SubheaderTiny,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubheaderTiny>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasIcon: false, mode: "Light" } };
