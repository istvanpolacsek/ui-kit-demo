import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallThumbnailDeviceColor } from "./OptionBoxSmallThumbnailDeviceColor";
const meta = {
  title: "Input/Option box / Small / Thumbnail device color",
  component: OptionBoxSmallThumbnailDeviceColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallThumbnailDeviceColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Dark" } };
