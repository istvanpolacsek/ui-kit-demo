import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialBoxRegular } from "./TestimonialBoxRegular";
const meta = {
  title: "Module/Testimonial box / Regular",
  component: TestimonialBoxRegular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TestimonialBoxRegular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasImage: true, state: "Default", mode: "Light" },
};
