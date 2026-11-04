import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentAnnotation } from "./ComponentAnnotation";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Utilities/_Component Annotation",
  component: ComponentAnnotation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ComponentAnnotation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { direction: "Right", type: "Group" } };

export const PrimaryDirectionRight: Story = {
  args: { ...Default.args, type: "Primary", direction: "Right" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("note")[0]).toBeVisible();
  },
};
export const SecondaryDirectionTop: Story = {
  args: { ...Default.args, type: "Secondary", direction: "Top" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("note")[0]);
    await expect(canvas.getAllByRole("note")[0]).toBeVisible();
  },
};
