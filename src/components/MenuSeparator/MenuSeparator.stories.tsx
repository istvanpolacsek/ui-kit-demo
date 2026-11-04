import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuSeparator } from "./MenuSeparator";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Menu/Menu Separator",
  component: MenuSeparator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuSeparator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const SeparatorIsVisible: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("separator")[0]).toBeVisible();
  },
};
