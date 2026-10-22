import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowsVertical } from "./ArrowsVertical";
const meta = {
  title: "Visual asset/Arrows vertical",
  component: ArrowsVertical,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowsVertical>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
