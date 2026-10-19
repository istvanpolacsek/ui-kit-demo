import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridReviews } from "./CardGridReviews";
const meta = {
  title: "Sections/Card Grid Reviews",
  component: CardGridReviews,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridReviews>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
