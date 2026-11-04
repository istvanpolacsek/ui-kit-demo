import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIConversation } from "./AIConversation";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "AI Chat/AI -> Conversation",
  component: AIConversation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIConversation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const ShowsConversationMessages: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("log")[0]).toBeVisible();
    await expect(canvas.getAllByRole("log")[0]).toHaveTextContent("");
  },
};
