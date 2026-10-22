import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDown } from "./ArrowDown";
const meta = {
  title: "Visual asset/Arrow down",
  component: ArrowDown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowDown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
