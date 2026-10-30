import type { Meta, StoryObj } from "@storybook/react-vite";
import { _23 } from "./_23";
const meta = {
  title: "Visual asset/2:3",
  component: _23,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof _23>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
