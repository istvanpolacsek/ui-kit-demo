import type { Meta, StoryObj } from "@storybook/react-vite";
import { Top } from "./Top";
const meta = {
  title: "Visual asset/Top",
  component: Top,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Top>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
