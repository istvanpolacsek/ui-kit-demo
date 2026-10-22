import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaletteSwatchSelectorDefault } from "./PaletteSwatchSelectorDefault";
const meta = {
  title: "Input/Palette swatch selector / Default",
  component: PaletteSwatchSelectorDefault,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaletteSwatchSelectorDefault>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { selected: "1", picker: "Default" } };
