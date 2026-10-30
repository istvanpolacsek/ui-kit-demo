import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonWithIconSubtle } from "./PrimaryButtonWithIconSubtle";
const meta = {
  title: "Button/Primary button with icon / Subtle",
  component: PrimaryButtonWithIconSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonWithIconSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
