import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyPrimaryButtonSubtle } from "./IconOnlyPrimaryButtonSubtle";
const meta = {
  title: "Button/Icon only primary button / Subtle",
  component: IconOnlyPrimaryButtonSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyPrimaryButtonSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default (no BG)", size: "Large", mode: "Light" },
};
