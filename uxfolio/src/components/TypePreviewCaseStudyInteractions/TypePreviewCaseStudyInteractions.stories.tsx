import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewCaseStudyInteractions } from "./TypePreviewCaseStudyInteractions";
const meta = {
  title: "Visual asset/Type preview / Case study interactions",
  component: TypePreviewCaseStudyInteractions,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewCaseStudyInteractions>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Zoom in" } };
