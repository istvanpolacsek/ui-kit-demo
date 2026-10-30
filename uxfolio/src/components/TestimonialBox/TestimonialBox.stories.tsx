import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestimonialBox } from "./TestimonialBox";
const meta = {
  title: "Module/Testimonial box",
  component: TestimonialBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    state: {
      control: "select",
      options: ["Default", "Hover", "Passive", "Active"],
    },
    mode: { control: "select", options: ["Light", "Dark"] },
  },
} satisfies Meta<typeof TestimonialBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { size: "Flexible", hasImage: true, state: "Default", mode: "Light" },
};
