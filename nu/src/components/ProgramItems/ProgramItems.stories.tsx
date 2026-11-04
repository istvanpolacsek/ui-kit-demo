import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgramItems } from "./ProgramItems";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Navigation/Program Items",
  component: ProgramItems,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProgramItems>;
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
export const DesktopView: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
