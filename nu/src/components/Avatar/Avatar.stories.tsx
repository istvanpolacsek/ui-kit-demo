import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Avatar / Avatar Group/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", type: "Image" } };

export const LargeImageAvatar: Story = {
  args: { ...Default.args, size: "Large", type: "Image" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("img")[0]);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
