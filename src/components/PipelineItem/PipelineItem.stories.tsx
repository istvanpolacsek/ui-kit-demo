import type { Meta, StoryObj } from "@storybook/react-vite";
import { PipelineItem } from "./PipelineItem";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Pipeline Item ",
  component: PipelineItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    type: { control: "select", options: ["Bold", "Light"] },
    status: {
      control: "select",
      options: ["Error", "Success", "Warning", "Neutral"],
    },
  },
} satisfies Meta<typeof PipelineItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Income",
    description: "$100,00",
    label: "Label",
    type: "Light",
    status: "Error",
  },
};

export const ErrorStatusWithBoldType: Story = {
  args: {
    ...Default.args,
    title: "Income",
    description: "$100,00",
    type: "Bold",
    status: "Error",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Income")[0]).toBeVisible();
    await expect(canvas.getAllByText("Income")[0]).toHaveTextContent("Income");
    await expect(canvas.getAllByText("$100,00")[0]).toHaveTextContent(
      "$100,00",
    );
  },
};
export const SuccessStatusWithLightType: Story = {
  args: {
    ...Default.args,
    title: "Income",
    description: "$100,00",
    type: "Light",
    status: "Success",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("$100,00")[0]).toBeVisible();
    await expect(canvas.getAllByText("Income")[0]).toHaveTextContent("Income");
    await expect(canvas.getAllByText("$100,00")[0]).toHaveTextContent(
      "$100,00",
    );
  },
};
export const WarningStatusNeutralDescription: Story = {
  args: {
    ...Default.args,
    title: "Income",
    description: "$100,00",
    type: "Bold",
    status: "Warning",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Income")[0]).toHaveTextContent("Income");
    await expect(canvas.getAllByText("$100,00")[0]).toHaveTextContent(
      "$100,00",
    );
  },
};
