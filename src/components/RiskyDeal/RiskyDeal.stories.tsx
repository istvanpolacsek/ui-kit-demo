import type { Meta, StoryObj } from "@storybook/react-vite";
import { RiskyDeal } from "./RiskyDeal";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Risky Deal",
  component: RiskyDeal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    logo: {
      control: "select",
      options: [
        "AirBNB",
        "Amazon",
        "Beats",
        "Black Bird",
        "Canon",
        "Deloitte",
        "Logi",
        "Netflix",
        "Salesforce",
        "Razer",
        "Microsoft",
      ],
    },
  },
} satisfies Meta<typeof RiskyDeal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    client: "Microsoft",
    activity: "Enterprise Expansion",
    totalValue: "$48,500",
    timeline: "Last activity 16 days ago",
    logo: "Microsoft",
  },
};

export const HighValueDealDetails: Story = {
  args: {
    ...Default.args,
    client: "Netflix",
    activity: "Contract Renewal",
    totalValue: "$250,000",
    timeline: "Last activity 2 days ago",
    logo: "Netflix",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Netflix")[0]).toHaveTextContent(
      "Netflix",
    );
    await expect(canvas.getAllByText("Contract Renewal")[0]).toHaveTextContent(
      "Contract Renewal",
    );
    await expect(canvas.getAllByText("$250,000")[0]).toHaveTextContent(
      "$250,000",
    );
    await expect(
      canvas.getAllByText("Last activity 2 days ago")[0],
    ).toHaveTextContent("Last activity 2 days ago");
  },
};
export const StaleDealWarning: Story = {
  args: {
    ...Default.args,
    client: "Deloitte",
    activity: "Initial Outreach",
    totalValue: "$12,000",
    timeline: "Last activity 45 days ago",
    logo: "Deloitte",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Last activity 45 days ago")[0],
    ).toHaveTextContent("Last activity 45 days ago");
    await expect(canvas.getAllByText("Deloitte")[0]).toHaveTextContent(
      "Deloitte",
    );
    await expect(canvas.getAllByText("$12,000")[0]).toHaveTextContent(
      "$12,000",
    );
  },
};
