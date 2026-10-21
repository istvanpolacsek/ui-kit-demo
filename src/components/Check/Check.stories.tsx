import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "./Check";
const meta = {
  title: "📱 Mobile components/check",
  component: Check,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Check>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
