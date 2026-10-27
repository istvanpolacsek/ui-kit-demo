import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityTimeline } from "./ActivityTimeline";
const meta = {
  title: "Design System/Activity Timeline",
  component: ActivityTimeline,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ActivityTimeline>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    date: "Sept 4, 2026 – 09:12 AM",
    title: "Proposal Sent",
    summary:
      "Proposal (v2) sent to Arlene. Includes enterprise pricing tier and onboarding package.",
    lastContributorName: "Jessica Pierson",
    contributors: [{ size: "S" }, { size: "S" }, { size: "S" }],
    actions: [
      {
        iconName: "paperclip",
        hasText: true,
        hasIcon: true,
        text: "Shared proposal",
        mode: "Light",
        size: "Default",
      },
    ],
  },
};
