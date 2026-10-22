import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dim } from "./Dim";
const meta = {
  title: "Visual asset/Dim",
  component: Dim,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dim>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
