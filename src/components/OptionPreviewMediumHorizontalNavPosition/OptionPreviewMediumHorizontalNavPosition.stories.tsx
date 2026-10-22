import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumHorizontalNavPosition } from "./OptionPreviewMediumHorizontalNavPosition";
const meta = {
  title: "Visual asset/Option preview / Medium horizontal / Nav position",
  component: OptionPreviewMediumHorizontalNavPosition,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumHorizontalNavPosition>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { position: "Top", hero: "Normal" } };
