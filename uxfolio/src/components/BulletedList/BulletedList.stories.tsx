import type { Meta, StoryObj } from "@storybook/react-vite";
import { BulletedList } from "./BulletedList";
const meta = {
  title: "Visual asset/Bulleted list",
  component: BulletedList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BulletedList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
