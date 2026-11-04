import type { Meta, StoryObj } from "@storybook/react-vite";
import { CTABanner } from "./CTABanner";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Section/CTA Banner",
  component: CTABanner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CTABanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const WebView: Story = {
  args: { ...Default.args, device: "Web" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
