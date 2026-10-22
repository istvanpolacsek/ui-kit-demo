import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxMediumSquareAspectRatio } from "./OptionBoxMediumSquareAspectRatio";
const meta = {
  title: "Input/Option box / Medium square / Aspect ratio",
  component: OptionBoxMediumSquareAspectRatio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxMediumSquareAspectRatio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "16:9" } };
