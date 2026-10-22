import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight } from "./ChevronRight";
const meta = {
  title: "Visual asset/Chevron right",
  component: ChevronRight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronRight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
