import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabLarge } from "./TabLarge";
const meta = {
  title: "Button/Tab / Large",
  component: TabLarge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TabLarge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { topIcon: false, sideIcon: false, mode: "Light" },
};
