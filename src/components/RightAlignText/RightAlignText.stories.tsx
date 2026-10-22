import type { Meta, StoryObj } from "@storybook/react-vite";
import { RightAlignText } from "./RightAlignText";
const meta = {
  title: "Visual asset/Right align text",
  component: RightAlignText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RightAlignText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
