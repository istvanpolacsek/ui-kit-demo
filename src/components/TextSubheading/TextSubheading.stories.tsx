import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSubheading } from "./TextSubheading";
const meta = {
  title: "Text/Text Subheading",
  component: TextSubheading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSubheading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Subheading" } };
