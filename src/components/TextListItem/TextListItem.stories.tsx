import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextListItem } from "./TextListItem";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text List Item",
  component: TextListItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "List item" } };

export const CustomText: Story = {
  args: { ...Default.args, text: "My custom list item" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("listitem")[0]).toBeVisible();
    await expect(
      canvas.getAllByText("My custom list item")[0],
    ).toHaveTextContent("My custom list item");
  },
};
