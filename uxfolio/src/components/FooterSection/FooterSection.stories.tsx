import type { Meta, StoryObj } from "@storybook/react-vite";
import { FooterSection } from "./FooterSection";
const meta = {
  title: "Section/Footer section",
  component: FooterSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["Flexible", "4", "5", "6", "8", "10"],
    },
  },
} satisfies Meta<typeof FooterSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasSocialIcons: true,
    hasNavigation: true,
    hasText: true,
    hasAddSectionButton: true,
    showUI: true,
    type: "Empty",
    size: "6",
  },
};
