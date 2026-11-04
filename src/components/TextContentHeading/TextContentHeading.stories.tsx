import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextContentHeading } from "./TextContentHeading";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Content Heading",
  component: TextContentHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextContentHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasSubheading: true,
    heading: "Heading",
    subheading: "Subheading",
    align: "Start",
  },
};

export const WithSubheading: Story = {
  args: {
    ...Default.args,
    hasSubheading: true,
    heading: "Welcome to Our Platform",
    subheading: "Everything you need in one place",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Welcome to Our Platform")[0],
    ).toHaveTextContent("Welcome to Our Platform");
    await expect(
      canvas.getAllByText("Everything you need in one place")[0],
    ).toHaveTextContent("Everything you need in one place");
    await expect(
      canvas.getAllByText("Everything you need in one place")[0],
    ).toBeVisible();
  },
};
export const CenteredAlignment: Story = {
  args: {
    ...Default.args,
    align: "Center",
    heading: "Centered Heading",
    hasSubheading: true,
    subheading: "Centered subheading text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Centered Heading")[0]).toHaveTextContent(
      "Centered Heading",
    );
    await expect(
      canvas.getAllByText("Centered subheading text")[0],
    ).toHaveTextContent("Centered subheading text");
  },
};
export const HeadingOnlyNoSubheading: Story = {
  args: {
    ...Default.args,
    hasSubheading: false,
    heading: "Standalone Heading",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Standalone Heading")[0],
    ).toHaveTextContent("Standalone Heading");
    {
      const hidden = canvas.queryAllByText("Subheading")[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
