import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlyPrimaryButtonNeutral } from "./IconOnlyPrimaryButtonNeutral";
const meta = {
  title: "Button/Icon only primary button / Neutral",
  component: IconOnlyPrimaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlyPrimaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", mode: "Light" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
