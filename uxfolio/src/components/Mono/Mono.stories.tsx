import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mono } from "./Mono";
const meta = {
  title: "Visual asset/Mono",
  component: Mono,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Mono>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
