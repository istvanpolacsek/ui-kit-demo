import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabNavBar } from "./TabNavBar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Tabs /Tab Nav Bar",
  component: TabNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileNavigation: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
