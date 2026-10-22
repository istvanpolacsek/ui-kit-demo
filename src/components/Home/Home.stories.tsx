import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home } from "./Home";
const meta = {
  title: "Visual asset/Home",
  component: Home,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Home>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
