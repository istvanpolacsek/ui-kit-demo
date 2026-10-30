import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditQuote } from "./EditQuote";
const meta = {
  title: "Visual asset/Edit quote",
  component: EditQuote,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditQuote>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
