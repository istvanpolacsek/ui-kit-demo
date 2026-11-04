import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSmall } from "./TextSmall";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Small",
  component: TextSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Small" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "This is a longer piece of text to verify how the small text component handles extended content gracefully.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "This is a longer piece of text to verify how the small text component handles extended content gracefully.",
      )[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This is a longer piece of text to verify how the small text component handles extended content gracefully.",
      )[0],
    ).toHaveTextContent(
      "This is a longer piece of text to verify how the small text component handles extended content gracefully.",
    );
  },
};
export const ShortLabelText: Story = {
  args: { ...Default.args, text: "Hi" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Hi")[0]).toBeVisible();
    await expect(canvas.getAllByText("Hi")[0]).toHaveTextContent("Hi");
  },
};
