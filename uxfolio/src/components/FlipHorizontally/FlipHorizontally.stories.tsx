import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlipHorizontally } from "./FlipHorizontally";
const meta = {
  title: "Visual asset/Flip horizontally",
  component: FlipHorizontally,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FlipHorizontally>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
