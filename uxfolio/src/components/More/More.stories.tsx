import type { Meta, StoryObj } from "@storybook/react-vite";
import { More } from "./More";
const meta = {
  title: "Visual asset/More",
  component: More,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof More>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
