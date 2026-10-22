import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridItemCaseStudySelector } from "./GridItemCaseStudySelector";
const meta = {
  title: "Panel/Grid item / Case study selector",
  component: GridItemCaseStudySelector,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GridItemCaseStudySelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
