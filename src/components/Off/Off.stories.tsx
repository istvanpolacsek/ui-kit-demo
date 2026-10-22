import type { Meta, StoryObj } from "@storybook/react-vite";
import { Off } from "./Off";
const meta = {
  title: "Visual asset/Off",
  component: Off,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Off>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
