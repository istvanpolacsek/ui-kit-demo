import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonDestructive } from "./PrimaryButtonDestructive";
const meta = {
  title: "Button/Primary button / Destructive",
  component: PrimaryButtonDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
