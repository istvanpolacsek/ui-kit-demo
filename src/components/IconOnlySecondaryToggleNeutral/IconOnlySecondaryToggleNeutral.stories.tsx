import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconOnlySecondaryToggleNeutral } from "./IconOnlySecondaryToggleNeutral";
const meta = {
  title: "Button/Icon only secondary toggle / Neutral",
  component: IconOnlySecondaryToggleNeutral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconOnlySecondaryToggleNeutral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", mode: "Light" } };
