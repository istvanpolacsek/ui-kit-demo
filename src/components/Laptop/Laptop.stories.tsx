import type { Meta, StoryObj } from "@storybook/react-vite";
import { Laptop } from "./Laptop";
const meta = {
  title: "Visual asset/Laptop",
  component: Laptop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Laptop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
