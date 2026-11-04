import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlainTooltip } from "./PlainTooltip";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Tooltip/Plain Tooltip",
  component: PlainTooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PlainTooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { supportingText: "Supporting text", type: "Single line" },
};

export const MultiLineWithLongText: Story = {
  args: {
    ...Default.args,
    type: "Multi line",
    supportingText:
      "This is a longer supporting text that spans multiple lines to demonstrate the multi line tooltip variant.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("tooltip")[0]).toBeVisible();
    await expect(
      canvas.getAllByText(
        "This is a longer supporting text that spans multiple lines to demonstrate the multi line tooltip variant.",
      )[0],
    ).toHaveTextContent(
      "This is a longer supporting text that spans multiple lines to demonstrate the multi line tooltip variant.",
    );
  },
};
export const SingleLineSupportingText: Story = {
  args: {
    ...Default.args,
    type: "Single line",
    supportingText: "Short tooltip hint",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("tooltip")[0]).toBeVisible();
    await expect(
      canvas.getAllByText("Short tooltip hint")[0],
    ).toHaveTextContent("Short tooltip hint");
  },
};
