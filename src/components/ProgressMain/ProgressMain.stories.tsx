import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressMain } from "./ProgressMain";
const meta = {
  title: "Design System/Progress / Main",
  component: ProgressMain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof ProgressMain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { progress: 0 } };
