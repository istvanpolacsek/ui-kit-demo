import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlaceholderTextMobile } from "./PlaceholderTextMobile";
const meta = {
  title: "  ↳ Dropdown/Placeholder Text / Mobile",
  component: PlaceholderTextMobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlaceholderTextMobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { textState: "Placeholder" } };
