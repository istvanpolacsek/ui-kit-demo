import type { Meta, StoryObj } from "@storybook/react-vite";
import { Review } from "./Review";
const meta = {
  title: "Visual asset/Review",
  component: Review,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Review>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
