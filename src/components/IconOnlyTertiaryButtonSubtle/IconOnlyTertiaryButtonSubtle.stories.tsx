import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyTertiaryButtonSubtle } from "./IconOnlyTertiaryButtonSubtle";
const meta = {
  title: "Button/Icon-only tertiary button / Subtle",
  component: IconOnlyTertiaryButtonSubtle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyTertiaryButtonSubtle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
