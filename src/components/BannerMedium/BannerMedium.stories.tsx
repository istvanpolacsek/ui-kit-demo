import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerMedium } from "./BannerMedium";
const meta = {
  title: "Visual asset/Banner / Medium",
  component: BannerMedium,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BannerMedium>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Positive", hasIcon: "True" } };
