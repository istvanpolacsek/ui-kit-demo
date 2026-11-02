import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultBulletpoint } from "./DefaultBulletpoint";
const meta = {
  title: "  ↳ Bulletpoints/Default Bulletpoint",
  component: DefaultBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DefaultBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Medium" } };
