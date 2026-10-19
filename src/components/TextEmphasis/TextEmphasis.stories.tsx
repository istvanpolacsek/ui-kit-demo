import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextEmphasis } from "./TextEmphasis";
const meta = {
  title: "Text/Text Emphasis",
  component: TextEmphasis,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextEmphasis>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Emphasis" } };
