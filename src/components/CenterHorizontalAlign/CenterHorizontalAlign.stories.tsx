import type { Meta, StoryObj } from "@storybook/react-vite";
import { CenterHorizontalAlign } from "./CenterHorizontalAlign";
const meta = {
  title: "Visual asset/Center horizontal align",
  component: CenterHorizontalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CenterHorizontalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
