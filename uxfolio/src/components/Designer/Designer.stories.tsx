import type { Meta, StoryObj } from "@storybook/react-vite";
import { Designer } from "./Designer";
const meta = {
  title: "Visual asset/Designer",
  component: Designer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Designer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
