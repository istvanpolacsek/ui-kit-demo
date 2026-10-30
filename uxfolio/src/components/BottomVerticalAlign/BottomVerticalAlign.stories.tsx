import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomVerticalAlign } from "./BottomVerticalAlign";
const meta = {
  title: "Visual asset/Bottom vertical align",
  component: BottomVerticalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BottomVerticalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
