import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxMediumSquareSectionAlignment } from "./OptionBoxMediumSquareSectionAlignment";
const meta = {
  title: "Input/Option box / Medium square / Section alignment",
  component: OptionBoxMediumSquareSectionAlignment,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxMediumSquareSectionAlignment>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "16:9" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
