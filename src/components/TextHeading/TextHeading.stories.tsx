import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextHeading } from "./TextHeading";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Heading",
  component: TextHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Heading" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "This Is A Very Long Heading That Stretches Across The Page",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This Is A Very Long Heading That Stretches Across The Page",
      )[0],
    ).toHaveTextContent(
      "This Is A Very Long Heading That Stretches Across The Page",
    );
  },
};
export const ShortTextContent: Story = {
  args: { ...Default.args, text: "Hi" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
    await expect(canvas.getAllByText("Hi")[0]).toHaveTextContent("Hi");
  },
};
