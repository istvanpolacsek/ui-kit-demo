import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewLargeHorizontalAnimatedTextLayout } from "./OptionPreviewLargeHorizontalAnimatedTextLayout";
const meta = {
  title:
    "Visual asset/Option preview / Large horizontal / Animated text layout",
  component: OptionPreviewLargeHorizontalAnimatedTextLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewLargeHorizontalAnimatedTextLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Linear" } };
