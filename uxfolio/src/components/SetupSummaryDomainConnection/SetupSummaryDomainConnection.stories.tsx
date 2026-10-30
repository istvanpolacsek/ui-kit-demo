import type { Meta, StoryObj } from "@storybook/react-vite";
import { SetupSummaryDomainConnection } from "./SetupSummaryDomainConnection";
const meta = {
  title: "Panel/Setup summary / Domain connection",
  component: SetupSummaryDomainConnection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SetupSummaryDomainConnection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "–" } };
