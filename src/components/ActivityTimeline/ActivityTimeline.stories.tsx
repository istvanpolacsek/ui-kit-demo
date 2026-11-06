import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityTimeline } from "./ActivityTimeline";
import { expect, userEvent, within } from "storybook/test";

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

export const LongSummaryAndCustomContributor: Story = {
  args: {
    ...Default.args,
    title: "Contract Signed",
    summary:
      "Contract signed by Arlene after final legal review. Includes enterprise pricing tier, onboarding package, and a 24-month support agreement with quarterly check-ins.",
    lastContributorName: "Marcus Lee",
    date: "Oct 12, 2026 – 02:45 PM",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Oct 12, 2026 – 02:45 PM")[0],
    ).toHaveTextContent("Oct 12, 2026 – 02:45 PM");
    await expect(canvas.getAllByText("Contract Signed")[0]).toHaveTextContent(
      "Contract Signed",
    );
    await expect(
      canvas.getAllByText(
        "Contract signed by Arlene after final legal review. Includes enterprise pricing tier, onboarding package, and a 24-month support agreement with quarterly check-ins.",
      )[0],
    ).toHaveTextContent(
      "Contract signed by Arlene after final legal review. Includes enterprise pricing tier, onboarding package, and a 24-month support agreement with quarterly check-ins.",
    );
    await expect(canvas.getAllByText("Marcus Lee")[0]).toHaveTextContent(
      "Marcus Lee",
    );
  },
};
