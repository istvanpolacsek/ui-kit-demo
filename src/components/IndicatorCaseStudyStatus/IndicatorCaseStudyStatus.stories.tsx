import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorCaseStudyStatus } from "./IndicatorCaseStudyStatus";
const meta = {
  title: "Visual asset/Indicator / Case Study Status",
  component: IndicatorCaseStudyStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IndicatorCaseStudyStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { status: "Hidden" } };
