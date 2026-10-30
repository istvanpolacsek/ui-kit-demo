import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlipHorizontallyAlt } from "./FlipHorizontallyAlt";
const meta = {
  title: "Visual asset/Flip horizontally alt",
  component: FlipHorizontallyAlt,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FlipHorizontallyAlt>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
