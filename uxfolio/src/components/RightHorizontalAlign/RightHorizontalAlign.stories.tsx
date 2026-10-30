import type { Meta, StoryObj } from "@storybook/react-vite";
import { RightHorizontalAlign } from "./RightHorizontalAlign";
const meta = {
  title: "Visual asset/Right horizontal align",
  component: RightHorizontalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RightHorizontalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
