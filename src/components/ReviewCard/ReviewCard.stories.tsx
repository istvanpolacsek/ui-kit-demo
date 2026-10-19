import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewCard } from "./ReviewCard";
const meta = {
  title: "Cards/Review Card",
  component: ReviewCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ReviewCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
