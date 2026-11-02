import type { Meta, StoryObj } from "@storybook/react-vite";
import { CTABanner } from "./CTABanner";
const meta = {
  title: "  ↳ Section/CTA Banner",
  component: CTABanner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CTABanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
