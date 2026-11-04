import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSubtitle } from "./TextSubtitle";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Subtitle",
  component: TextSubtitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSubtitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Subtitle" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "This is a very long subtitle that contains a lot of descriptive information about the section",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "This is a very long subtitle that contains a lot of descriptive information about the section",
      )[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This is a very long subtitle that contains a lot of descriptive information about the section",
      )[0],
    ).toHaveTextContent(
      "This is a very long subtitle that contains a lot of descriptive information about the section",
    );
  },
};
export const ShortTextContent: Story = {
  args: { ...Default.args, text: "Subtitle" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Subtitle")[0]).toBeVisible();
    await expect(canvas.getAllByText("Subtitle")[0]).toHaveTextContent(
      "Subtitle",
    );
  },
};
