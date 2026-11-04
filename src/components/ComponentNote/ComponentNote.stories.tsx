import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentNote } from "./ComponentNote";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Utilities/_Component Note",
  component: ComponentNote,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ComponentNote>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showNoteTaker: true, title: "Title", type: "Documentation" },
};

export const ShowsNoteTaker: Story = {
  args: {
    ...Default.args,
    showNoteTaker: true,
    title: "My Note",
    type: "Annotation",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("note")[0]).toBeVisible();
    await expect(canvas.getAllByText("My Note")[0]).toHaveTextContent(
      "My Note",
    );
  },
};
export const DocumentationTypeDisplaysTitle: Story = {
  args: { ...Default.args, type: "Documentation", title: "Release Notes" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Release Notes")[0]).toBeVisible();
    await expect(canvas.getAllByText("Release Notes")[0]).toHaveTextContent(
      "Release Notes",
    );
  },
};
