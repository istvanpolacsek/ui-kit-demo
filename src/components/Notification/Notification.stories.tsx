import type { Meta, StoryObj } from "@storybook/react-vite";
import { Notification } from "./Notification";
const meta = {
  title: "Visual asset/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Notification>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
