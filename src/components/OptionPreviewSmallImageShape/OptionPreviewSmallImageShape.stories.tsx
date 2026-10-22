import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallImageShape } from "./OptionPreviewSmallImageShape";
const meta = {
  title: "Visual asset/Option preview / Small / Image shape",
  component: OptionPreviewSmallImageShape,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallImageShape>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Rectangle" } };
