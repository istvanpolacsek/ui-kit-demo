import type { Meta, StoryObj } from "@storybook/react-vite";
import { LeftAlignText } from "./LeftAlignText";
const meta = {
  title: "Visual asset/Left align text",
  component: LeftAlignText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LeftAlignText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
