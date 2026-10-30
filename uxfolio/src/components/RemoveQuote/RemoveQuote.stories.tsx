import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveQuote } from "./RemoveQuote";
const meta = {
  title: "Visual asset/Remove quote",
  component: RemoveQuote,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveQuote>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
