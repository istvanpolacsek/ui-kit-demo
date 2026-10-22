import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumHorizontalBackground } from "./OptionPreviewMediumHorizontalBackground";
const meta = {
  title: "Visual asset/Option preview / Medium horizontal / Background",
  component: OptionPreviewMediumHorizontalBackground,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumHorizontalBackground>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { style: "Transparent" } };
