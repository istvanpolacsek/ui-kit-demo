import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumHorizontalNavItem } from "./OptionPreviewMediumHorizontalNavItem";
const meta = {
  title: "Visual asset/Option preview / Medium horizontal / Nav item",
  component: OptionPreviewMediumHorizontalNavItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumHorizontalNavItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { position: "Simple" } };
