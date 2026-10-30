import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewLargeHorizontalHeroLayout } from "./OptionPreviewLargeHorizontalHeroLayout";
const meta = {
  title: "Visual asset/Option preview / Large horizontal / Hero layout",
  component: OptionPreviewLargeHorizontalHeroLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewLargeHorizontalHeroLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Horizontal" } };
