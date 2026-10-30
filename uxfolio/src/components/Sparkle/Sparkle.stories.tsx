import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sparkle } from "./Sparkle";
const meta = {
  title: "Visual asset/Sparkle",
  component: Sparkle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sparkle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
