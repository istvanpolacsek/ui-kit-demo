import type { Meta, StoryObj } from "@storybook/react-vite";
import { CRMCard } from "./CRMCard";
const meta = {
  component: CRMCard,
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
} satisfies Meta<typeof CRMCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    client: "Airbnb",
    showStatusTag: true,
    leadValue: "$10,000",
    contact: "Sarah Connor",
    owner: "Jessica Pierson",
    status: "new",
    logo: "AirBNB",
    recentUpdateLabel: "New email",
    recentUpdateType: "Bold",
    recentUpdateStatus: "Error",
    progress: 50,
    stageLabel: "Created at 7.9.2026",
    stageType: "Bold",
    stageStatus: "Neutral",
    size: "S",
  },
};
