import type { Meta, StoryObj } from "@storybook/react-vite";
import { TertiaryButtonDestructive } from "./TertiaryButtonDestructive";
const meta = {
  title: "Button/Tertiary button / Destructive",
  component: TertiaryButtonDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TertiaryButtonDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light", size: "Large" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
