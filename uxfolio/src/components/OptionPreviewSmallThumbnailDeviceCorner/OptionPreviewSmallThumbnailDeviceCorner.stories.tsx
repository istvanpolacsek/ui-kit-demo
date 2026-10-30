import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallThumbnailDeviceCorner } from "./OptionPreviewSmallThumbnailDeviceCorner";
const meta = {
  title: "Visual asset/Option preview / Small / Thumbnail device corner",
  component: OptionPreviewSmallThumbnailDeviceCorner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallThumbnailDeviceCorner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { rounding: "Sharp" } };
