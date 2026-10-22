import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyThumbnail } from "./CaseStudyThumbnail";
const meta = {
  title: "Panel/Case study thumbnail",
  component: CaseStudyThumbnail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyThumbnail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
