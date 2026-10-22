import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabList } from "./TabList";
const meta = {
  title: "Panel/Tab list",
  component: TabList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
