import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddQuote } from "./AddQuote";
const meta = {
  title: "Visual asset/Add quote",
  component: AddQuote,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddQuote>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
