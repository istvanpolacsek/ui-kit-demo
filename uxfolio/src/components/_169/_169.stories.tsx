import type { Meta, StoryObj } from "@storybook/react-vite";
import { _169 } from "./_169";
const meta = {
  title: "Visual asset/16:9",
  component: _169,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof _169>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
