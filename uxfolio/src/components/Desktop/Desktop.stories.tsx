import type { Meta, StoryObj } from "@storybook/react-vite";
import { Desktop } from "./Desktop";
const meta = {
  title: "Visual asset/Desktop",
  component: Desktop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Desktop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
