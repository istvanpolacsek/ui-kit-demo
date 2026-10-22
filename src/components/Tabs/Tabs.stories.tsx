import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
const meta = {
  title: "  ↳ Tabs  🆕/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { value: "Tab", state: "Default", device: "Desktop" },
};
