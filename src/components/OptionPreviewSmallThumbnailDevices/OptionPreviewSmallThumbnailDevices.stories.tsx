import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallThumbnailDevices } from "./OptionPreviewSmallThumbnailDevices";
const meta = {
  title: "Visual asset/Option preview / Small / Thumbnail devices",
  component: OptionPreviewSmallThumbnailDevices,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallThumbnailDevices>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "No device" } };
