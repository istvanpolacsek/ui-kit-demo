import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardIcon } from "./CardIcon";
const meta = {
  title: "  ↳ Cards 🆕/Card Icon",
  component: CardIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { mode: "Dark", variant: "Blue", device: "Desktop" },
};
