import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumSquareThumbnailLayout } from "./OptionPreviewMediumSquareThumbnailLayout";
const meta = {
  title: "Visual asset/Option preview / Medium square / Thumbnail layout",
  component: OptionPreviewMediumSquareThumbnailLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumSquareThumbnailLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Mobile", layout: 1 } };
