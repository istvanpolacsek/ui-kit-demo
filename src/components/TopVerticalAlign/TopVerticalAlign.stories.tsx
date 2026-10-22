import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopVerticalAlign } from "./TopVerticalAlign";
const meta = {
  title: "Visual asset/Top vertical align",
  component: TopVerticalAlign,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TopVerticalAlign>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
