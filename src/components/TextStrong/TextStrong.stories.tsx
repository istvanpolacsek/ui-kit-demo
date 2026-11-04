import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextStrong } from "./TextStrong";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Strong",
  component: TextStrong,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextStrong>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Strong" } };

export const CustomTextContent: Story = {
  args: { ...Default.args, text: "Important notice" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Important notice")[0]).toHaveTextContent(
      "Important notice",
    );
  },
};
export const LongText: Story = {
  args: {
    ...Default.args,
    text: "This is a very long strong text that spans across the component to test how it handles lengthy content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "This is a very long strong text that spans across the component to test how it handles lengthy content",
      )[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This is a very long strong text that spans across the component to test how it handles lengthy content",
      )[0],
    ).toHaveTextContent(
      "This is a very long strong text that spans across the component to test how it handles lengthy content",
    );
  },
};
