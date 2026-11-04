import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroWithIcons } from "./HeroWithIcons";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Section/Hero with Icons",
  component: HeroWithIcons,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroWithIcons>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showInfoWidget: true, device: "Desktop" },
};

export const MobileWithInfoWidget: Story = {
  args: { ...Default.args, device: "Mobile", showInfoWidget: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const DesktopWithoutInfoWidget: Story = {
  args: { ...Default.args, device: "Desktop", showInfoWidget: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
