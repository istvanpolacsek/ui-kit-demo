import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallThumbnailDeviceCorner } from "./OptionBoxSmallThumbnailDeviceCorner";
const meta = {
  title: "Input/Option box / Small / Thumbnail device corner",
  component: OptionBoxSmallThumbnailDeviceCorner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallThumbnailDeviceCorner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Sharp" } };
