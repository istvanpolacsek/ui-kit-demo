import type { Meta, StoryObj } from "@storybook/react-vite";
import { Star } from "./Star";
const meta = {
  title: "Visual asset/Star",
  component: Star,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Star>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
