import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { label: "Label", type: "Bold", status: "Error" },
};

export const ErrorStatusLabel: Story = {
  args: { ...Default.args, label: "Error Tag", status: "Error", type: "Bold" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Error Tag")[0]).toBeVisible();
    await expect(canvas.getAllByText("Error Tag")[0]).toHaveTextContent(
      "Error Tag",
    );
  },
};
export const SuccessLightType: Story = {
  args: { ...Default.args, label: "Success", status: "Success", type: "Light" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Success")[0]).toBeVisible();
    await expect(canvas.getAllByText("Success")[0]).toHaveTextContent(
      "Success",
    );
  },
};
export const WarningNeutralLabel: Story = {
  args: { ...Default.args, label: "Warning Notice", status: "Warning" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Warning Notice")[0]).toHaveTextContent(
      "Warning Notice",
    );
  },
};
