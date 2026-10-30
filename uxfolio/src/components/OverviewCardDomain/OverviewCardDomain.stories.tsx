import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverviewCardDomain } from "./OverviewCardDomain";
const meta = {
  title: "Panel/Overview card / Domain",
  component: OverviewCardDomain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OverviewCardDomain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { status: "Active", type: "Uxfolio" } };
