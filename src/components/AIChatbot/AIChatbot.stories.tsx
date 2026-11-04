import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatbot } from "./AIChatbot";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/AI Chatbot",
  component: AIChatbot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatbot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("complementary")[0]).toBeVisible();
  },
};
