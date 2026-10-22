import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconBulletpoint } from "./IconBulletpoint";
const meta = {
  title: "  ↳ Bulletpoints 🆕/Icon Bulletpoint",
  component: IconBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
