import type { Meta, StoryObj } from "@storybook/react-vite";
import { Italic } from "./Italic";
const meta = {
  title: "Visual asset/Italic",
  component: Italic,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Italic>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
