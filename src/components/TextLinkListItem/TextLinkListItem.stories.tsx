import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLinkListItem } from "./TextLinkListItem";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Link List Item",
  component: TextLinkListItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextLinkListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "List item" } };

export const CustomText: Story = {
  args: { ...Default.args, text: "Visit our documentation" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Visit our documentation")[0],
    ).toHaveTextContent("Visit our documentation");
  },
};
export const HoverListItem: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByText("List item")[0]);
    await expect(canvas.getAllByText("List item")[0]).toBeVisible();
  },
};
