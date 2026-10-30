import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionWeb } from "./OptionWeb";
const meta = {
  title: "  ↳ Dropdown/optionWeb",
  component: OptionWeb,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionWeb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
