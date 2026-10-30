import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemFontPreset } from "./ListItemFontPreset";
const meta = {
  title: "Panel/List item / Font preset",
  component: ListItemFontPreset,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemFontPreset>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
