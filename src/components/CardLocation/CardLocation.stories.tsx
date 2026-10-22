import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardLocation } from "./CardLocation";
const meta = {
  title: "  ↳ Cards 🆕/Card Location",
  component: CardLocation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardLocation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
