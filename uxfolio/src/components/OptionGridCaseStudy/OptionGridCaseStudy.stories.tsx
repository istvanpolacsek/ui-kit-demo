import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionGridCaseStudy } from "./OptionGridCaseStudy";
const meta = {
  title: "Panel/Option grid / Case study",
  component: OptionGridCaseStudy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionGridCaseStudy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
