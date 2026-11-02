import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroBulletpoint } from "./HeroBulletpoint";
const meta = {
  title: "  ↳ Bulletpoints/Hero Bulletpoint",
  component: HeroBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
