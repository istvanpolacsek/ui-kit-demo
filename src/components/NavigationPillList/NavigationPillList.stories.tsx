import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationPillList } from "./NavigationPillList";
const meta = {
  title: "Navigation/Navigation Pill List",
  component: NavigationPillList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationPillList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    link6: true,
    link2: true,
    link5: true,
    link4: true,
    link3: true,
    link1: true,
    link7: true,
    direction: "Row",
  },
};
