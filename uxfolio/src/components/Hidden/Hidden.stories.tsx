import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hidden } from "./Hidden";
const meta = {
  title: "Visual asset/Hidden",
  component: Hidden,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Hidden>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
