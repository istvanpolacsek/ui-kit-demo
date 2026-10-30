import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight } from "./ArrowRight";
const meta = {
  title: "Visual asset/Arrow right",
  component: ArrowRight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowRight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
