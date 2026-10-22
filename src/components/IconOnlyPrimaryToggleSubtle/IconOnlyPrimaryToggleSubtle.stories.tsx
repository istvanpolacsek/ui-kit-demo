import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyPrimaryToggleSubtle } from "./IconOnlyPrimaryToggleSubtle";
const meta = {
  title: "Button/Icon only primary toggle / Subtle",
  component: IconOnlyPrimaryToggleSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyPrimaryToggleSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", size: "Large", mode: "Light" },
};
