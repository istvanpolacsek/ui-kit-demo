import type { Meta, StoryObj } from "@storybook/react-vite";
import { Unsatisfied } from "./Unsatisfied";
const meta = {
  title: "Visual asset/Unsatisfied",
  component: Unsatisfied,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Unsatisfied>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
