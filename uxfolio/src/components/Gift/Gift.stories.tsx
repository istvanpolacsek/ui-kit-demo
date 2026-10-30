import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gift } from "./Gift";
const meta = {
  title: "Visual asset/Gift",
  component: Gift,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Gift>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
