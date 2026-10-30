import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverviewCardGeneral } from "./OverviewCardGeneral";
const meta = {
  title: "Panel/Overview card / General",
  component: OverviewCardGeneral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OverviewCardGeneral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showText: true, type: "Url" } };
