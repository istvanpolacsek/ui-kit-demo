import type { Meta, StoryObj } from "@storybook/react-vite";
import { LeftHorizontalAlign } from "./LeftHorizontalAlign";
const meta = {
  title: "Visual asset/Left horizontal align",
  component: LeftHorizontalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LeftHorizontalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
