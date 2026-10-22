import type { Meta, StoryObj } from "@storybook/react-vite";
import { SecondaryButtonDestructive } from "./SecondaryButtonDestructive";
const meta = {
  title: "Button/Secondary button / Destructive",
  component: SecondaryButtonDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SecondaryButtonDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
