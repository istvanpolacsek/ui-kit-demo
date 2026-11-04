import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardTestimonial } from "./CardTestimonial";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Cards/Card Testimonial",
  component: CardTestimonial,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardTestimonial>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", type: "Avatar" } };

export const MobileAvatar: Story = {
  args: { ...Default.args, device: "Mobile", type: "Avatar" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
