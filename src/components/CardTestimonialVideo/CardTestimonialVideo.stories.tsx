import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardTestimonialVideo } from "./CardTestimonialVideo";
const meta = {
  title: "  ↳ Cards 🆕/Card Testimonial Video",
  component: CardTestimonialVideo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardTestimonialVideo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop", type: "Image" } };
