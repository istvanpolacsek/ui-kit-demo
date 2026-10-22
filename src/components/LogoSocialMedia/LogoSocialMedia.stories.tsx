import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoSocialMedia } from "./LogoSocialMedia";
const meta = {
  title: "Visual asset/Logo / Social media",
  component: LogoSocialMedia,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoSocialMedia>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Facebook" } };
