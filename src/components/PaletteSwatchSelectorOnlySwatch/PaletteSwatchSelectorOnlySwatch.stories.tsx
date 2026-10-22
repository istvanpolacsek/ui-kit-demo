import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaletteSwatchSelectorOnlySwatch } from "./PaletteSwatchSelectorOnlySwatch";
const meta = {
  title: "Input/Palette swatch selector / Only swatch",
  component: PaletteSwatchSelectorOnlySwatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaletteSwatchSelectorOnlySwatch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", selector: "Selector" },
};
