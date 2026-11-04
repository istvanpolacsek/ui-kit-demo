import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultBulletpoint } from "./DefaultBulletpoint";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Bulletpoints/Default Bulletpoint",
  component: DefaultBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DefaultBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Medium" } };

export const MediumSize: Story = {
  args: { ...Default.args, size: "Medium" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("listitem")[0]);
    await expect(canvas.getAllByRole("listitem")[0]).toBeVisible();
  },
};
