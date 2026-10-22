import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumSquareAspectRatio } from "./OptionPreviewMediumSquareAspectRatio";
const meta = {
  title: "Visual asset/Option preview / Medium square / Aspect ratio",
  component: OptionPreviewMediumSquareAspectRatio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumSquareAspectRatio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { aspectRatio: "16:9" } };
