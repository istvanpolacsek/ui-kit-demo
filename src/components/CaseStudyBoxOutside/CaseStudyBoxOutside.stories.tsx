import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyBoxOutside } from "./CaseStudyBoxOutside";
const meta = {
  title: "Module/Case study box / Outside",
  component: CaseStudyBoxOutside,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: [0, 1, 2, 3] },
    moduleDividerState: {
      control: "select",
      options: ["Default", "Hover", "Resizing"],
    },
    moduleDividerMode: { control: "select", options: ["Light", "Dark"] },
  },
} satisfies Meta<typeof CaseStudyBoxOutside>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    designedThumbnail: true,
    hasCTA: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    type: "Top",
    mode: "Light",
    canAddModule: false,
    canResize: true,
    size: 1,
    moduleDividerState: "Default",
    moduleDividerMode: "Light",
  },
};
