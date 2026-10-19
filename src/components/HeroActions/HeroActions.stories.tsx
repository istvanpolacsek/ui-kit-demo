import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroActions } from "./HeroActions";
const meta = {
  title: "Sections/Hero Actions",
  component: HeroActions,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroActions>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
