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
export const Default: Story = {
  args: {
    type: "Default",
    items: [
      { value: "1" },
      { value: "2" },
      { value: "3" },
      { value: "4" },
      { value: "5" },
      { value: "6" },
      { value: "7" },
      { value: "8" },
      { value: "9" },
      { value: "10" },
    ],
    defaultValue: "1",
  },
};
