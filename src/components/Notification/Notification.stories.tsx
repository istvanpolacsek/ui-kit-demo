import type { Meta, StoryObj } from "@storybook/react-vite";
import { Notification } from "./Notification";
const meta = {
  title: "Notification/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Notification>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    dismissible: true,
    icon: "4039:12985",
    hasIcon: true,
    hasButton: true,
    title: "Title",
    body: "Body text.",
    variant: "Message",
  },
};
