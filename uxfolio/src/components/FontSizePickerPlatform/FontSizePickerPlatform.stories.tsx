import type { Meta, StoryObj } from "@storybook/react-vite";
import { FontSizePickerPlatform } from "./FontSizePickerPlatform";
const meta = {
  title: "Input/Font size picker / Platform",
  component: FontSizePickerPlatform,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FontSizePickerPlatform>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Dropdown only" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
