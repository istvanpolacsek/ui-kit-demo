import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerHuge } from "./BannerHuge";
const meta = {
  title: "Visual asset/Banner / Huge",
  component: BannerHuge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BannerHuge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Premium" } };
