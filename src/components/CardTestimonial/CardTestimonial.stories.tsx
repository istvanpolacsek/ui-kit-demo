import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardTestimonial } from "./CardTestimonial";
const meta = {
  title: "  ↳ Cards 🆕/Card Testimonial",
  component: CardTestimonial,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardTestimonial>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", type: "Avatar" } };
