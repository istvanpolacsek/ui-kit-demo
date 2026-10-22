import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemStep } from "./ListItemStep";
const meta = {
  title: "Panel/List item / Step",
  component: ListItemStep,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemStep>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
