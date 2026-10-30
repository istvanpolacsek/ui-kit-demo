import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./Dialog";
const meta = {
  title: "  ↳ Dialog/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Basic dialog title",
    supportingText:
      "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    icon: "False",
    device: "Desktop",
  },
};
