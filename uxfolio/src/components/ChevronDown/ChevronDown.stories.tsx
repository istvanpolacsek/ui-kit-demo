import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDown } from "./ChevronDown";
const meta = {
  title: "Visual asset/Chevron down",
  component: ChevronDown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronDown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
