import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumSquareAnimation } from "./OptionPreviewMediumSquareAnimation";
const meta = {
  title: "Visual asset/Option preview / Medium square / Animation",
  component: OptionPreviewMediumSquareAnimation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumSquareAnimation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Rise" } };
