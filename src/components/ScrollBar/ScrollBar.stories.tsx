import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollBar } from "./ScrollBar";
const meta = {
  title: "  ↳ Scroll Bar 🆕/Scroll Bar",
  component: ScrollBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ScrollBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
