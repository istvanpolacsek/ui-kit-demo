import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewCard } from "./ReviewCard";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Cards/Review Card",
  component: ReviewCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ReviewCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const HoverRevealsContent: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
