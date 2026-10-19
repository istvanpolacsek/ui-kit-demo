import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroNewsletter } from "./HeroNewsletter";
const meta = {
  title: "Sections/Hero Newsletter",
  component: HeroNewsletter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroNewsletter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
