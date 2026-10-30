import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyTertiaryButtonNeutral } from "./IconOnlyTertiaryButtonNeutral";
const meta = {
  title: "Button/Icon-only tertiary button / Neutral",
  component: IconOnlyTertiaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyTertiaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
