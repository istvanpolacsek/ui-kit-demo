import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyPrimaryButtonDestructive } from "./IconOnlyPrimaryButtonDestructive";
const meta = {
  title: "Button/Icon only primary button / Destructive",
  component: IconOnlyPrimaryButtonDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyPrimaryButtonDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", mode: "Light" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
