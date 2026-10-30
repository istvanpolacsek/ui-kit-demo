import type { Meta, StoryObj } from "@storybook/react-vite";
import { Detach } from "./Detach";
const meta = {
  title: "Visual asset/Detach",
  component: Detach,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Detach>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
