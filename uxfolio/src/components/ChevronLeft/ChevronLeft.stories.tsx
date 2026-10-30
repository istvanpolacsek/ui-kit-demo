import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronLeft } from "./ChevronLeft";
const meta = {
  title: "Visual asset/Chevron left",
  component: ChevronLeft,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronLeft>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
