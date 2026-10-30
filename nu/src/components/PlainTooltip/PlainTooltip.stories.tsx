import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlainTooltip } from "./PlainTooltip";
const meta = {
  title: "  ↳ Tooltip/Plain Tooltip",
  component: PlainTooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlainTooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { supportingText: "Supporting text", type: "Single line" },
};
