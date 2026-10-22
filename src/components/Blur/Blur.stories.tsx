import type { Meta, StoryObj } from "@storybook/react-vite";
import { Blur } from "./Blur";
const meta = {
  title: "Visual asset/Blur",
  component: Blur,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Blur>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
