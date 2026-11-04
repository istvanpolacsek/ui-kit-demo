import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageProductResults } from "./PageProductResults";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Page Product Results",
  component: PageProductResults,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageProductResults>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const DesktopView: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
