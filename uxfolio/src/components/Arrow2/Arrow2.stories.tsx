import type { Meta, StoryObj } from "@storybook/react-vite";
import { Arrow2 } from "./Arrow2";
const meta = {
  title: "Visual asset/Arrow 2",
  component: Arrow2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Arrow2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
