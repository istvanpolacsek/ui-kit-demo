import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIChatBox } from "./AIChatBox";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "AI Chat/AI Chat Box",
  component: AIChatBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AIChatBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const ClickToOpen: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
