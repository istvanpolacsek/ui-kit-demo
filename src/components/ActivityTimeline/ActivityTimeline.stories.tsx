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

export const LongSummaryText: Story = {
  args: {
    ...Default.args,
    title: "Contract Renewal Discussion",
    summary:
      "Reviewed all contract terms with the legal team and stakeholders. Final approval pending signature from both parties before end of quarter deadline.",
    lastContributorName: "Marcus Webb",
    date: "Oct 15, 2026 – 02:45 PM",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Contract Renewal Discussion")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Contract Renewal Discussion")[0],
    ).toHaveTextContent("Contract Renewal Discussion");
    await expect(
      canvas.getAllByText(
        "Reviewed all contract terms with the legal team and stakeholders. Final approval pending signature from both parties before end of quarter deadline.",
      )[0],
    ).toHaveTextContent(
      "Reviewed all contract terms with the legal team and stakeholders. Final approval pending signature from both parties before end of quarter deadline.",
    );
    await expect(canvas.getAllByText("Marcus Webb")[0]).toHaveTextContent(
      "Marcus Webb",
    );
    await expect(
      canvas.getAllByText("Oct 15, 2026 – 02:45 PM")[0],
    ).toHaveTextContent("Oct 15, 2026 – 02:45 PM");
  },
};
export const ContributorAndDateDetails: Story = {
  args: {
    ...Default.args,
    lastContributorName: "David Okafor",
    date: "Jan 1, 2027 – 12:00 AM",
    title: "Year-End Report Filed",
    summary:
      "Annual report submitted to all stakeholders and archived in the document management system.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByText("David Okafor")[0]);
    await expect(canvas.getAllByText("David Okafor")[0]).toHaveTextContent(
      "David Okafor",
    );
    await expect(
      canvas.getAllByText("Jan 1, 2027 – 12:00 AM")[0],
    ).toHaveTextContent("Jan 1, 2027 – 12:00 AM");
  },
};
