import type { Meta, StoryObj } from "@storybook/react-vite";
import { Share2 } from "./Share2";
const meta = {
  title: "Visual asset/Share 2",
  component: Share2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Share2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
