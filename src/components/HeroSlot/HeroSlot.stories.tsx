import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroSlot } from "./HeroSlot";
const meta = {
  title: "Sections/Hero (Slot)",
  component: HeroSlot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroSlot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
