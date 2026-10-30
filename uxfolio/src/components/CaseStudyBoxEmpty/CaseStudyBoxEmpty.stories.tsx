import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyBoxEmpty } from "./CaseStudyBoxEmpty";
const meta = {
  title: "Module/Case study box / Empty",
  component: CaseStudyBoxEmpty,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CaseStudyBoxEmpty>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light", size: "Small" } };
