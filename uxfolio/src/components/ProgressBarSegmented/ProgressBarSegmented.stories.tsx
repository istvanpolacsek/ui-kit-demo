import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBarSegmented } from "./ProgressBarSegmented";
const meta = {
  title: "Visual asset/Progress bar / Segmented",
  component: ProgressBarSegmented,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProgressBarSegmented>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { value: "1/2", mode: "Light", type: "Active" },
};
