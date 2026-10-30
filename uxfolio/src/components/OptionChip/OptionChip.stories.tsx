import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionChip } from "./OptionChip";
const meta = {
  title: "Input/Option chip",
  component: OptionChip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionChip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
