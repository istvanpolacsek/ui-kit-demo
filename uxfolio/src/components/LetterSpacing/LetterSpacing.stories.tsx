import type { Meta, StoryObj } from "@storybook/react-vite";
import { LetterSpacing } from "./LetterSpacing";
const meta = {
  title: "Visual asset/Letter spacing",
  component: LetterSpacing,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LetterSpacing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
