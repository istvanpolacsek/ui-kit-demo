import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextContentTitle } from "./TextContentTitle";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Content Title",
  component: TextContentTitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextContentTitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    subtitle: "Subtitle",
    hasSubtitle: true,
    title: "Title",
    align: "Start",
  },
};

export const WithSubtitle: Story = {
  args: {
    ...Default.args,
    title: "Welcome",
    subtitle: "Learn more about our features",
    hasSubtitle: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Welcome")[0]).toBeVisible();
    await expect(canvas.getAllByText("Welcome")[0]).toHaveTextContent(
      "Welcome",
    );
    await expect(
      canvas.getAllByText("Learn more about our features")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Learn more about our features")[0],
    ).toHaveTextContent("Learn more about our features");
  },
};
export const CenterAligned: Story = {
  args: { ...Default.args, title: "Centered Title", align: "Center" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
    await expect(canvas.getAllByText("Centered Title")[0]).toHaveTextContent(
      "Centered Title",
    );
  },
};
export const TitleOnlyNoSubtitle: Story = {
  args: { ...Default.args, title: "Standalone Title", hasSubtitle: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Standalone Title")[0]).toBeVisible();
    await expect(canvas.getAllByText("Standalone Title")[0]).toHaveTextContent(
      "Standalone Title",
    );
    {
      const hidden = canvas.queryAllByText("Subtitle")[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
