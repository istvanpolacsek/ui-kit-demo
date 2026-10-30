import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridEdit } from "./GridEdit";
const meta = {
  title: "Visual asset/Grid edit",
  component: GridEdit,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof GridEdit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
