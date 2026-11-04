import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroFrame } from "./HeroFrame";
const meta = {
  title: "  ↳ Section/Hero Frame",
  component: HeroFrame,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroFrame>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
