import type { Meta, StoryObj } from "@storybook/react-vite";
import { Restart } from "./Restart";
const meta = {
  title: "Visual asset/Restart",
  component: Restart,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Restart>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
