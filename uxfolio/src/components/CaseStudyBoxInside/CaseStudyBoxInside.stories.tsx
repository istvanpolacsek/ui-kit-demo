import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyBoxInside } from "./CaseStudyBoxInside";
const meta = {
  title: "Module/Case study box / Inside",
  component: CaseStudyBoxInside,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyBoxInside>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    designedThumbnail: true,
    hasCTA: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    type: "Small",
    mode: "Light",
  },
};
