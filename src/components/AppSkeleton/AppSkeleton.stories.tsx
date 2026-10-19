import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppSkeleton } from "./AppSkeleton";
const meta = {
  title: "Claude Components/App skeleton",
  component: AppSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Inline card" } };
