import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewLargeHorizontalImageHeightConsistency } from "./OptionPreviewLargeHorizontalImageHeightConsistency";
const meta = {
  title:
    "Visual asset/Option preview / Large horizontal / Image height consistency",
  component: OptionPreviewLargeHorizontalImageHeightConsistency,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewLargeHorizontalImageHeightConsistency>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Even" } };
