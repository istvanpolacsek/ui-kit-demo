import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyNavigationItem } from "./CaseStudyNavigationItem";
const meta = {
  title: "Module/Case study navigation item",
  component: CaseStudyNavigationItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyNavigationItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasThumbnail: true, type: "Default" } };
