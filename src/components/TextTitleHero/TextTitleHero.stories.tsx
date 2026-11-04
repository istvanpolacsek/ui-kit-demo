import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextTitleHero } from "./TextTitleHero";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Title Hero",
  component: TextTitleHero,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextTitleHero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Title Hero" } };

export const CustomHeadingText: Story = {
  args: { ...Default.args, text: "Welcome to Our Platform" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Welcome to Our Platform")[0],
    ).toHaveTextContent("Welcome to Our Platform");
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
  },
};
export const LongTitleText: Story = {
  args: {
    ...Default.args,
    text: "This Is a Very Long Hero Title That Spans Across the Full Width of the Page",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "This Is a Very Long Hero Title That Spans Across the Full Width of the Page",
      )[0],
    ).toHaveTextContent(
      "This Is a Very Long Hero Title That Spans Across the Full Width of the Page",
    );
    await expect(canvas.getAllByRole("heading")[0]).toHaveTextContent(
      "This Is a Very Long Hero Title That Spans Across the Full Width of the Page",
    );
  },
};
