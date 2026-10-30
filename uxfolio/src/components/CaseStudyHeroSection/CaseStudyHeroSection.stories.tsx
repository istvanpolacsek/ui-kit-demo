import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyHeroSection } from "./CaseStudyHeroSection";
const meta = {
  title: "Section/Case study hero section",
  component: CaseStudyHeroSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyHeroSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showUI: true, hoverOnText: false, defaultProp: "Text" },
};
