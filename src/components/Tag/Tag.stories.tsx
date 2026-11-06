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

export const CustomLabelWithSuccessStatus: Story = {
  args: {
    ...Default.args,
    label: "Payment received",
    status: "Success",
    type: "Bold",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Payment received")[0]).toHaveTextContent(
      "Payment received",
    );
  },
};
export const LongLabelInLightWarning: Story = {
  args: {
    ...Default.args,
    label: "Your subscription will expire in three days",
    status: "Warning",
    type: "Light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Your subscription will expire in three days")[0],
    ).toHaveTextContent("Your subscription will expire in three days");
  },
};
