import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";
const meta = {
  title: "  ↳ Navigation 🆕/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
