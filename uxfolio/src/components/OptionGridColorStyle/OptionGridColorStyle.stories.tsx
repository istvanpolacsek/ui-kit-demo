import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionGridColorStyle } from "./OptionGridColorStyle";
const meta = {
  title: "Panel/Option grid / Color style",
  component: OptionGridColorStyle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionGridColorStyle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Solid" } };
