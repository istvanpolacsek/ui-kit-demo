import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowsResizeHorizontal } from "./ArrowsResizeHorizontal";
const meta = {
  title: "Visual asset/Arrows resize horizontal",
  component: ArrowsResizeHorizontal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowsResizeHorizontal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
