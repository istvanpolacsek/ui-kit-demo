import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalImageHeightConsistency } from "./OptionBoxLargeHorizontalImageHeightConsistency";
const meta = {
  title: "Input/Option box / Large horizontal / Image height consistency",
  component: OptionBoxLargeHorizontalImageHeightConsistency,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalImageHeightConsistency>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "Even" } };
