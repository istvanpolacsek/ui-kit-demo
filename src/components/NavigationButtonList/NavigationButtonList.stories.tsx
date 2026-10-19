import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonList } from "./NavigationButtonList";
const meta = {
  title: "Navigation/Navigation Button List",
  component: NavigationButtonList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationButtonList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    link2: true,
    link5: true,
    link4: true,
    link3: true,
    link1: true,
    direction: "Row",
  },
};
