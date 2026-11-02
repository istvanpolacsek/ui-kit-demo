import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabNavBar } from "./TabNavBar";
const meta = {
  title: "  ↳ Tabs /Tab Nav Bar",
  component: TabNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
