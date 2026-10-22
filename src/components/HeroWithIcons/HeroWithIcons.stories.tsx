import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroWithIcons } from "./HeroWithIcons";
const meta = {
  title: "  ↳ Sections 🆕/Hero with Icons",
  component: HeroWithIcons,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroWithIcons>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showInfoWidget: true, device: "Desktop" },
};
