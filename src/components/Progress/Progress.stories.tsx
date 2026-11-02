import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";
const meta = {
  title: "Design System/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { label: "Label", amount: "€00k", progress: 0 },
};
