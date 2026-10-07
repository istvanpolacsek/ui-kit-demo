import type { Meta, StoryObj } from "@storybook/react-vite";
import { PipelineItem } from "./PipelineItem";
const meta = {
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
