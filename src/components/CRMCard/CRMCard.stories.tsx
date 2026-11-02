import type { Meta, StoryObj } from "@storybook/react-vite";
import { CRMCard } from "./CRMCard";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/CRM Card",
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

export const ShowsClientAndContactDetails: Story = {
  args: {
    ...Default.args,
    client: "Airbnb",
    contact: "Sarah Connor",
    leadValue: "$10,000",
    owner: "Jessica Pierson",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Airbnb")[0]).toHaveTextContent("Airbnb");
    await expect(canvas.getAllByText("Sarah Connor")[0]).toHaveTextContent(
      "Sarah Connor",
    );
    await expect(canvas.getAllByText("$10,000")[0]).toHaveTextContent(
      "$10,000",
    );
    await expect(canvas.getAllByText("Jessica Pierson")[0]).toHaveTextContent(
      "Jessica Pierson",
    );
  },
};
export const ShowsStatusTagWhenEnabled: Story = {
  args: {
    ...Default.args,
    showStatusTag: true,
    status: "proposal-sent",
    client: "Airbnb",
    contact: "Sarah Connor",
    leadValue: "$10,000",
    owner: "Jessica Pierson",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Airbnb")[0]).toHaveTextContent("Airbnb");
    await expect(canvas.getAllByText("Sarah Connor")[0]).toHaveTextContent(
      "Sarah Connor",
    );
    await expect(canvas.getAllByText("$10,000")[0]).toHaveTextContent(
      "$10,000",
    );
    await expect(canvas.getAllByText("Jessica Pierson")[0]).toHaveTextContent(
      "Jessica Pierson",
    );
  },
};
export const WonAndSignedDeal: Story = {
  args: {
    ...Default.args,
    status: "won-&-signed",
    client: "Airbnb",
    leadValue: "$10,000",
    contact: "Sarah Connor",
    owner: "Jessica Pierson",
    stageType: "Bold",
    stageStatus: "Success",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Airbnb")[0]).toHaveTextContent("Airbnb");
    await expect(canvas.getAllByText("$10,000")[0]).toHaveTextContent(
      "$10,000",
    );
    await expect(canvas.getAllByText("Sarah Connor")[0]).toHaveTextContent(
      "Sarah Connor",
    );
    await expect(canvas.getAllByText("Jessica Pierson")[0]).toHaveTextContent(
      "Jessica Pierson",
    );
  },
};
