import type { Meta, StoryObj } from "@storybook/react-vite";
import { VeryUnsatisfied } from "./VeryUnsatisfied";
const meta = {
  title: "Visual asset/Very unsatisfied",
  component: VeryUnsatisfied,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof VeryUnsatisfied>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
