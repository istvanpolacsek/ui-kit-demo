import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollBar } from "./ScrollBar";
const meta = {
  title: "Input/Scroll bar",
  component: ScrollBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ScrollBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
