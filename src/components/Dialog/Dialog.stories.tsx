import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./Dialog";
const meta = {
  title: "Dialog/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { defaultOpen: true, children: "Dialog content" },
};
export const Closed: Story = { args: { ...Default.args, defaultOpen: false } };
