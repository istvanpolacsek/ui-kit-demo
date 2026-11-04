import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatNavBar } from "./ChatNavBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Chat Assistance/Chat Nav Bar",
  component: ChatNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };

export const OpenStateVisible: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
