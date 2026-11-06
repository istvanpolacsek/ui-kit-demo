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

export const LongClientAndActivityText: Story = {
  args: {
    ...Default.args,
    client: "Global Technology Holdings International",
    activity: "Multi-Region Enterprise Platform Expansion and Renewal",
    totalValue: "$1,248,500",
    timeline: "Last activity 45 days ago",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Global Technology Holdings International")[0],
    ).toHaveTextContent("Global Technology Holdings International");
    await expect(
      canvas.getAllByText(
        "Multi-Region Enterprise Platform Expansion and Renewal",
      )[0],
    ).toHaveTextContent(
      "Multi-Region Enterprise Platform Expansion and Renewal",
    );
    await expect(canvas.getAllByText("$1,248,500")[0]).toHaveTextContent(
      "$1,248,500",
    );
    await expect(
      canvas.getAllByText("Last activity 45 days ago")[0],
    ).toHaveTextContent("Last activity 45 days ago");
  },
};
export const DifferentClientWithNetflixLogo: Story = {
  args: {
    ...Default.args,
    client: "Netflix",
    logo: "Netflix",
    activity: "Contract Renewal",
    totalValue: "$12,000",
    timeline: "Last activity 3 days ago",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Netflix")[0]).toHaveTextContent(
      "Netflix",
    );
    await expect(canvas.getAllByText("Contract Renewal")[0]).toHaveTextContent(
      "Contract Renewal",
    );
    await expect(canvas.getAllByText("$12,000")[0]).toHaveTextContent(
      "$12,000",
    );
    await expect(
      canvas.getAllByText("Last activity 3 days ago")[0],
    ).toHaveTextContent("Last activity 3 days ago");
  },
};
