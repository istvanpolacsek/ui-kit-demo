import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionMobile } from "./OptionMobile";
const meta = {
  title: "  ↳ Dropdown 🆕/optionMobile",
  component: OptionMobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionMobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
