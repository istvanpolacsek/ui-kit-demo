import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextContentHeading } from "./TextContentHeading";
const meta = {
  title: "Text/Text Content Heading",
  component: TextContentHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextContentHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasSubheading: true,
    heading: "Heading",
    subheading: "Subheading",
    align: "Start",
  },
};
