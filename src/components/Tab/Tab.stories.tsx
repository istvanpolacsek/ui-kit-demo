import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "./Tab";
const meta = {
  title: "Tabs/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tab>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: "Label" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
