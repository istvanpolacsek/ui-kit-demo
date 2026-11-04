import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./AvatarGroup";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Avatar / Avatar Group/Avatar Group",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large" } };

export const SmallSize: Story = {
  args: { ...Default.args, size: "Small" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
export const LargeSize: Story = {
  args: { ...Default.args, size: "Large" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("group")[0]);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
