import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialCard } from "./TestimonialCard";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Cards/Testimonial Card",
  component: TestimonialCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TestimonialCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { title: "Title", description: "Description" },
};

export const HoverRevealsCard: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
