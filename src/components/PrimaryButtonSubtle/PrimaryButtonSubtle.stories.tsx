import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButtonSubtle } from "./PrimaryButtonSubtle";
const meta = {
  title: "Button/Primary button / Subtle",
  component: PrimaryButtonSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PrimaryButtonSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
