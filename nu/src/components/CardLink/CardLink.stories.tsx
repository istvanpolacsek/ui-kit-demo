import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardLink } from "./CardLink";
const meta = {
  title: "  ↳ Cards/Card Link",
  component: CardLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
