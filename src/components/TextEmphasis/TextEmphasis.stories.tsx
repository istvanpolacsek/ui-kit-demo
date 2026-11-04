import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextEmphasis } from "./TextEmphasis";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Emphasis",
  component: TextEmphasis,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextEmphasis>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Emphasis" } };

export const CustomTextContent: Story = {
  args: { ...Default.args, text: "Important highlighted information" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Important highlighted information")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Important highlighted information")[0],
    ).toHaveTextContent("Important highlighted information");
  },
};
export const HoverOverEmphasis: Story = {
  args: { ...Default.args, text: "Hover me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByText("Hover me")[0]);
    await expect(canvas.getAllByText("Hover me")[0]).toBeVisible();
  },
};
