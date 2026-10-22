import type { Meta, StoryObj } from "@storybook/react-vite";
import { LineHeight } from "./LineHeight";
const meta = {
  title: "Visual asset/Line height",
  component: LineHeight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LineHeight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
