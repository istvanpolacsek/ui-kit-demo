import type { Meta, StoryObj } from "@storybook/react-vite";
import { InlineCard } from "./InlineCard";
const meta = {
  title: "📱 Mobile components/inline card",
  component: InlineCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InlineCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Inline Loading" } };
