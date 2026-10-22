import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemFontCustom } from "./ListItemFontCustom";
const meta = {
  title: "Panel/List item / Font custom",
  component: ListItemFontCustom,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemFontCustom>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Grouped" } };
