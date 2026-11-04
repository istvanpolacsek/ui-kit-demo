import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
const meta = {
  title: "Tabs/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      { label: "Label", value: "1" },
      { label: "Label", value: "2" },
      { label: "Label", value: "3" },
      { label: "Label", value: "4" },
      { label: "Label", value: "5" },
      { label: "Label", value: "6" },
    ],
    defaultValue: "1",
  },
};
