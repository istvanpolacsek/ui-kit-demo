import type { Meta, StoryObj } from "@storybook/react-vite";
import { RiskyDeal } from "./RiskyDeal";
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
