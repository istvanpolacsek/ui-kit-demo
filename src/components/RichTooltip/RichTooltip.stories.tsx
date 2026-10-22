import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTooltip } from "./RichTooltip";
const meta = {
  title: "  ↳ Tooltip 🆕/Rich Tooltip",
  component: RichTooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RichTooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
