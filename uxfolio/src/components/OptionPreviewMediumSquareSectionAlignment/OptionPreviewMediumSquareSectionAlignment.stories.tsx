import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewMediumSquareSectionAlignment } from "./OptionPreviewMediumSquareSectionAlignment";
const meta = {
  title: "Visual asset/Option preview / Medium square / Section alignment",
  component: OptionPreviewMediumSquareSectionAlignment,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewMediumSquareSectionAlignment>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { alignment: "Left" } };
