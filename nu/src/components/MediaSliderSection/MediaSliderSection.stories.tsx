import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaSliderSection } from "./MediaSliderSection";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Section/Media Slider Section",
  component: MediaSliderSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MediaSliderSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
