import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryItem } from "./SummaryItem";
import { iconIconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Summary Item",
  component: SummaryItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { iconName: { control: "select", options: iconIconNameOptions } },
} satisfies Meta<typeof SummaryItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Deal Stage",
    value: "Call scheduled",
    iconName: "layout-dashboard",
  },
};

export const CustomLabelAndValue: Story = {
  args: { ...Default.args, label: "Contract Value", value: "$12,500" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Contract Value")[0]).toHaveTextContent(
      "Contract Value",
    );
    await expect(canvas.getAllByText("$12,500")[0]).toHaveTextContent(
      "$12,500",
    );
  },
};
export const LongValueText: Story = {
  args: {
    ...Default.args,
    label: "Next Step",
    value:
      "Send the revised proposal and pricing breakdown to the procurement team for final review",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Next Step")[0]).toHaveTextContent(
      "Next Step",
    );
    await expect(
      canvas.getAllByText(
        "Send the revised proposal and pricing breakdown to the procurement team for final review",
      )[0],
    ).toHaveTextContent(
      "Send the revised proposal and pricing breakdown to the procurement team for final review",
    );
  },
};
