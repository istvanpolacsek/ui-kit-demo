import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppHeader } from "./AppHeader";
const meta = {
  title: "Claude Components/App header",
  component: AppHeader,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { accessory: "Expand" } };
