import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabRow } from "./TabRow";
const meta = {
  title: "Panel/Tab row",
  component: TabRow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabRow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { number: 2, selected: 1, mode: "Light" },
};
