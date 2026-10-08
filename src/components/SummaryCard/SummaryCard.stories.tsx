import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryCard } from "./SummaryCard";
const meta = {
  title: "Design System/Summary Card",
  component: SummaryCard,
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
    recentUpdateType: { control: "select", options: ["Bold", "Light"] },
    recentUpdateStatus: {
      control: "select",
      options: ["Error", "Success", "Warning", "Neutral"],
    },
    progress: { control: { type: "range", min: 0, max: 100 } },
    stageType: { control: "select", options: ["Bold", "Light"] },
    stageStatus: {
      control: "select",
      options: ["Error", "Success", "Warning", "Neutral"],
    },
    size: { control: "select", options: ["L", "S"] },
  },
} satisfies Meta<typeof SummaryCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    summary:
      "Netflix is evaluating 3 vendors. Our pricing is competitive but legal review may delay timeline.",
    client: "Netflix",
    contact: "Arlene McCoy",
    owner: "Phillip",
    summaryItems: [
      {
        iconName: "layout-dashboard",
        value: "Call scheduled",
        label: "Deal Stage",
      },
      { iconName: "star", value: "€185,000", label: "Deal Value" },
      {
        iconName: "calendar",
        value: "Oct 12, 2026",
        label: "Expected Close Date",
      },
      { iconName: "chart-line", value: "23%", label: "Probability" },
      { iconName: "clipboard", value: "New Business", label: "Deal Type" },
      { iconName: "clock", value: "12 months", label: "Contract Length" },
    ],
    logo: "Netflix",
    recentUpdateLabel: "Follow up",
    recentUpdateType: "Bold",
    recentUpdateStatus: "Warning",
    progress: 100,
    stageLabel: "Created at 7.9.2026",
    stageType: "Bold",
    stageStatus: "Neutral",
    size: "S",
  },
};
