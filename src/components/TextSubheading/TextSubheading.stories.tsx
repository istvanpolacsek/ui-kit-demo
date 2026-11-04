import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextSubheading } from "./TextSubheading";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Subheading",
  component: TextSubheading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextSubheading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Subheading" } };

export const LongTextContent: Story = {
  args: {
    ...Default.args,
    text: "This Is A Much Longer Subheading That Spans More Content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This Is A Much Longer Subheading That Spans More Content",
      )[0],
    ).toHaveTextContent(
      "This Is A Much Longer Subheading That Spans More Content",
    );
  },
};
export const ShortTextContent: Story = {
  args: { ...Default.args, text: "Overview" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("heading")[0]).toBeVisible();
    await expect(canvas.getAllByText("Overview")[0]).toHaveTextContent(
      "Overview",
    );
  },
};
