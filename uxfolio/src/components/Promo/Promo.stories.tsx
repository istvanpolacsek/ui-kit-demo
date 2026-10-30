import type { Meta, StoryObj } from "@storybook/react-vite";
import { Promo } from "./Promo";
const meta = {
  title: "Visual asset/Promo",
  component: Promo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Promo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
