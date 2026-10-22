import type { Meta, StoryObj } from "@storybook/react-vite";
import { Close } from "./Close";
const meta = {
  title: "Visual asset/Close",
  component: Close,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Close>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
