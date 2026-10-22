import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlySecondaryButtonNeutral } from "./IconOnlySecondaryButtonNeutral";
const meta = {
  title: "Button/Icon only secondary button / Neutral",
  component: IconOnlySecondaryButtonNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlySecondaryButtonNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", mode: "Light" } };
