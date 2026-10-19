import type { Meta, StoryObj } from "@storybook/react-vite";
import { AISidebar } from "./AISidebar";
const meta = {
  title: "AI Chat/AI Sidebar",
  component: AISidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AISidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
