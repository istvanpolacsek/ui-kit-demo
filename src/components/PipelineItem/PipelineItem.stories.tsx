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

export const CustomTitleAndDescription: Story = {
  args: { ...Default.args, title: "Expenses", description: "$250,00" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Expenses")[0]).toHaveTextContent(
      "Expenses",
    );
    await expect(canvas.getAllByText("$250,00")[0]).toHaveTextContent(
      "$250,00",
    );
  },
};
export const ErrorStatusWithBoldTag: Story = {
  args: {
    ...Default.args,
    title: "Overdue payments",
    description: "$75,50",
    type: "Bold",
    status: "Error",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Overdue payments")[0]).toHaveTextContent(
      "Overdue payments",
    );
    await expect(canvas.getAllByText("$75,50")[0]).toHaveTextContent("$75,50");
  },
};
