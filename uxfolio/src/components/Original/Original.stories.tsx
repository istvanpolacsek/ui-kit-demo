import type { Meta, StoryObj } from "@storybook/react-vite";
import { Original } from "./Original";
const meta = {
  title: "Visual asset/Original",
  component: Original,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Original>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
