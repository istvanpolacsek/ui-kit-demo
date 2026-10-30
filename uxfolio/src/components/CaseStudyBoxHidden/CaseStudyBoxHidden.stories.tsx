import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyBoxHidden } from "./CaseStudyBoxHidden";
const meta = {
  title: "Module/Case study box / Hidden",
  component: CaseStudyBoxHidden,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyBoxHidden>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    designedThumbnail: true,
    moveLeft: true,
    moveRight: true,
    mode: "Light",
  },
};
