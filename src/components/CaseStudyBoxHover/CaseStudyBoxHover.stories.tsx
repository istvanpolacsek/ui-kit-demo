import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyBoxHover } from "./CaseStudyBoxHover";
const meta = {
  title: "Module/Case study box / Hover",
  component: CaseStudyBoxHover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyBoxHover>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    designedThumbnail: true,
    hasCTA: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
  },
};
