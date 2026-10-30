import type { Meta, StoryObj } from "@storybook/react-vite";
import { CTAWidget } from "./CTAWidget";
const meta = {
  title: "  ↳ Widgets/CTA Widget",
  component: CTAWidget,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CTAWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
