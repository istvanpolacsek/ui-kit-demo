import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelImage } from "./PanelImage";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Panel Image",
  component: PanelImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PanelImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobilePlatform: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
export const DesktopPlatform: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("img")[0]);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
