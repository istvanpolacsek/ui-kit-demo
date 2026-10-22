import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardBulletpoint } from "./CardBulletpoint";
const meta = {
  title: "  ↳ Cards 🆕/Card Bulletpoint",
  component: CardBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
