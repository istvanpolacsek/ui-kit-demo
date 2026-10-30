import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel2 } from "./Carousel2";
const meta = {
  title: "Visual asset/Carousel 2",
  component: Carousel2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Carousel2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
