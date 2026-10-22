import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalCardsSectionLayouts } from "./OptionBoxLargeHorizontalCardsSectionLayouts";
const meta = {
  title: "Input/Option box / Large horizontal / Cards section layouts",
  component: OptionBoxLargeHorizontalCardsSectionLayouts,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalCardsSectionLayouts>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "Two cards one rows", state: "Default" },
};
