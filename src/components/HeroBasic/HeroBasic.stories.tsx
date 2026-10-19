import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroBasic } from "./HeroBasic";
const meta = {
  title: "Sections/Hero Basic",
  component: HeroBasic,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroBasic>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
