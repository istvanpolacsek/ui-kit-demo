import type { Meta, StoryObj } from "@storybook/react-vite";
import { Wave } from "./Wave";
const meta = {
  title: "Visual asset/Wave",
  component: Wave,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Wave>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
