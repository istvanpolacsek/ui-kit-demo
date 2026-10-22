import type { Meta, StoryObj } from "@storybook/react-vite";
import { CenterVerticalAlign } from "./CenterVerticalAlign";
const meta = {
  title: "Visual asset/Center vertical align",
  component: CenterVerticalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CenterVerticalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
