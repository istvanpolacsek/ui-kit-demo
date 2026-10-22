import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonWithIconDestructive } from "./PrimaryButtonWithIconDestructive";
const meta = {
  title: "Button/Primary button with icon / Destructive",
  component: PrimaryButtonWithIconDestructive,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonWithIconDestructive>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
