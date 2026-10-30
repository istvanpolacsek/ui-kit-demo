import type { Meta, StoryObj } from "@storybook/react-vite";
import { Effects } from "./Effects";
const meta = {
  title: "Visual asset/Effects",
  component: Effects,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Effects>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
