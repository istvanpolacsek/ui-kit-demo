import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialCard } from "./TestimonialCard";
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
