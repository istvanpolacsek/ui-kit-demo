import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionGridSimple } from "./OptionGridSimple";
const meta = {
  title: "Panel/Option grid / Simple",
  component: OptionGridSimple,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionGridSimple>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasSubheader: true, isHardToSee: false, type: "Section background" },
};
