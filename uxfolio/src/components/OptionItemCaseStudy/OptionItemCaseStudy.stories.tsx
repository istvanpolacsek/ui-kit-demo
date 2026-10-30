import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionItemCaseStudy } from "./OptionItemCaseStudy";
const meta = {
  title: "Input/Option item / Case study",
  component: OptionItemCaseStudy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionItemCaseStudy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { active: "False" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
