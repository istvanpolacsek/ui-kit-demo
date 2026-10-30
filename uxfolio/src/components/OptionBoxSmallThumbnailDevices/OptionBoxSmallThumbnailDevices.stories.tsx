import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallThumbnailDevices } from "./OptionBoxSmallThumbnailDevices";
const meta = {
  title: "Input/Option box / Small / Thumbnail devices",
  component: OptionBoxSmallThumbnailDevices,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallThumbnailDevices>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "No device" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
