import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridTestimonials } from "./CardGridTestimonials";
const meta = {
  title: "Sections/Card Grid Testimonials",
  component: CardGridTestimonials,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridTestimonials>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
