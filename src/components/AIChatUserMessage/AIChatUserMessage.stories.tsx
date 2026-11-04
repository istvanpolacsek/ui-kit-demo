import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatUserMessage } from "./AIChatUserMessage";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "AI Chat/AI Chat -> User message",
  component: AIChatUserMessage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatUserMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const HoverRevealsMessage: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
