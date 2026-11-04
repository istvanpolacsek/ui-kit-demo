import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "This is a much longer piece of text to verify that the component renders extended content correctly without truncation or layout issues.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "This is a much longer piece of text to verify that the component renders extended content correctly without truncation or layout issues.",
      )[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This is a much longer piece of text to verify that the component renders extended content correctly without truncation or layout issues.",
      )[0],
    ).toHaveTextContent(
      "This is a much longer piece of text to verify that the component renders extended content correctly without truncation or layout issues.",
    );
  },
};
export const ShortTextContent: Story = {
  args: { ...Default.args, text: "Hi" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Hi")[0]).toBeVisible();
    await expect(canvas.getAllByText("Hi")[0]).toHaveTextContent("Hi");
  },
};
