import type { Meta, StoryObj } from "@storybook/react-vite";
import { FontSizePickerDefault } from "./FontSizePickerDefault";
const meta = {
  title: "Input/Font size picker / Default",
  component: FontSizePickerDefault,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FontSizePickerDefault>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Dropdown only" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
