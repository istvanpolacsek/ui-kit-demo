import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroImage } from "./HeroImage";
const meta = {
  title: "Sections/Hero Image",
  component: HeroImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
