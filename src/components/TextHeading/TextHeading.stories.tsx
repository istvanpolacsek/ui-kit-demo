import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextHeading } from "./TextHeading";
const meta = {
  title: "Text/Text Heading",
  component: TextHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Heading" } };
