import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./AvatarGroup";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Avatars/Avatar Group",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showOverflow: true, number: "+1", spacing: "Spaced" },
};

export const SpacedLayout: Story = {
  args: { ...Default.args, spacing: "Spaced" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const OverflowHiddenByDefault: Story = {
  args: { ...Default.args, showOverflow: false, number: "5" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    {
      const hidden = canvas.queryAllByText("5")[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
