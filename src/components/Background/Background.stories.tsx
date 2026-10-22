import type { Meta, StoryObj } from "@storybook/react-vite";
import { Background } from "./Background";
const meta = {
  title: "Visual asset/Background",
  component: Background,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Background>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
