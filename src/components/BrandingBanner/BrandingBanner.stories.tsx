import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandingBanner } from "./BrandingBanner";
const meta = {
  title: "Overlay/Branding banner",
  component: BrandingBanner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BrandingBanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
