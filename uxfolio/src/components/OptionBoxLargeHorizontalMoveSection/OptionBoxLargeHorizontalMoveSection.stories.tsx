import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalMoveSection } from "./OptionBoxLargeHorizontalMoveSection";
const meta = {
  title: "Input/Option box / Large horizontal / Move section",
  component: OptionBoxLargeHorizontalMoveSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalMoveSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Up" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
