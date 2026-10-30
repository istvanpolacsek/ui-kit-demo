import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold } from "./Bold";
const meta = {
  title: "Visual asset/Bold",
  component: Bold,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Bold>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
