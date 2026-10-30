import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewLargeHorizontalMoveSection } from "./OptionPreviewLargeHorizontalMoveSection";
const meta = {
  title: "Visual asset/Option preview / Large horizontal / Move section",
  component: OptionPreviewLargeHorizontalMoveSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewLargeHorizontalMoveSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Up" } };
