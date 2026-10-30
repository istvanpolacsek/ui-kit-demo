import type { Meta, StoryObj } from "@storybook/react-vite";
import { CorrectGrammar } from "./CorrectGrammar";
const meta = {
  title: "Visual asset/Correct grammar",
  component: CorrectGrammar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CorrectGrammar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
