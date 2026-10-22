import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialSlider } from "./TestimonialSlider";
const meta = {
  title: "  ↳ Sections 🆕/Testimonial Slider",
  component: TestimonialSlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TestimonialSlider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", type: "Avatar" } };
