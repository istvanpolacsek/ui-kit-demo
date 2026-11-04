import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridPricing } from "./CardGridPricing";
const meta = {
  title: "Sections/Card Grid Pricing",
  component: CardGridPricing,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridPricing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
