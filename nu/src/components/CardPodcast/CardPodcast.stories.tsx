import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPodcast } from "./CardPodcast";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Cards/Card Podcast",
  component: CardPodcast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardPodcast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
export const WebViewHover: Story = {
  args: { ...Default.args, device: "Web" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
