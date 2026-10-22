import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlaceholderTextWeb } from "./PlaceholderTextWeb";
const meta = {
  title: "  ↳ Dropdown 🆕/Placeholder Text / Web",
  component: PlaceholderTextWeb,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlaceholderTextWeb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { textState: "Placeholder" } };
