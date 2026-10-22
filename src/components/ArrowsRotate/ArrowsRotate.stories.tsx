import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowsRotate } from "./ArrowsRotate";
const meta = {
  title: "Visual asset/Arrows rotate",
  component: ArrowsRotate,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowsRotate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
