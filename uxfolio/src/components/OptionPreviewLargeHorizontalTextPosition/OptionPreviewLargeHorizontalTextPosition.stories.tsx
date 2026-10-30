import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewLargeHorizontalTextPosition } from "./OptionPreviewLargeHorizontalTextPosition";
const meta = {
  title: "Visual asset/Option preview / Large horizontal / Text position",
  component: OptionPreviewLargeHorizontalTextPosition,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewLargeHorizontalTextPosition>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { textPosition: "Below" } };
