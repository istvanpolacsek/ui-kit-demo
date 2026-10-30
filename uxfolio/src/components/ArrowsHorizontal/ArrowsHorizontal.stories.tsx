import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowsHorizontal } from "./ArrowsHorizontal";
const meta = {
  title: "Visual asset/Arrows horizontal",
  component: ArrowsHorizontal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowsHorizontal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
