import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";
const meta = {
  title: "Visual asset/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
