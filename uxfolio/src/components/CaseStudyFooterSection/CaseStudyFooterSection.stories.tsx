import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyFooterSection } from "./CaseStudyFooterSection";
const meta = {
  title: "Section/Case study footer section",
  component: CaseStudyFooterSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    caseStudyNavigationItemType: { control: "select", options: ["Default"] },
    caseStudyNavigationItem2Type: { control: "select", options: ["Default"] },
    caseStudyNavigationItem3Type: { control: "select", options: ["Default"] },
  },
} satisfies Meta<typeof CaseStudyFooterSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasTitle: true,
    hasDivider: true,
    showUI: true,
    type: "Empty",
    caseStudyNavigationItemHasThumbnail: true,
    caseStudyNavigationItemType: "Default",
    caseStudyNavigationItem2HasThumbnail: true,
    caseStudyNavigationItem2Type: "Default",
    caseStudyNavigationItem3HasThumbnail: true,
    caseStudyNavigationItem3Type: "Default",
  },
};
