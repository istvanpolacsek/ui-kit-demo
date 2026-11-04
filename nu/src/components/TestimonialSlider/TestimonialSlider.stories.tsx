import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialSlider } from "./TestimonialSlider";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Section/Testimonial Slider",
  component: TestimonialSlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TestimonialSlider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", type: "Avatar" } };

export const DesktopAvatarView: Story = {
  args: { ...Default.args, device: "Desktop", type: "Avatar" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("region")[0]);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
