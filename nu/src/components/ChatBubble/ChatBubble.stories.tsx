import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChatBubble } from "./ChatBubble";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Chat Assistance/Chat bubble",
  component: ChatBubble,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChatBubble>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showRichTooltip: true, state: "Closed" },
};

export const OpenStateShowsDialog: Story = {
  args: { ...Default.args, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("dialog")[0]).toBeVisible();
  },
};
export const RichTooltipVisibleWhenOpen: Story = {
  args: { ...Default.args, showRichTooltip: true, state: "Open" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("dialog")[0]).toBeVisible();
  },
};
