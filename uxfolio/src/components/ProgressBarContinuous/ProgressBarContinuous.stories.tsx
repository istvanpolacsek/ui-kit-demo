import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBarContinuous } from "./ProgressBarContinuous";
const meta = {
  title: "Visual asset/Progress bar / Continuous",
  component: ProgressBarContinuous,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProgressBarContinuous>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { timePast: "1/3", mode: "Light", type: "Active" },
};
