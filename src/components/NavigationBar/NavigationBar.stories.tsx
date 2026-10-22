import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationBar } from "./NavigationBar";
const meta = {
  title: "Overlay/Navigation bar",
  component: NavigationBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { property1: "Editor", property2: "Publish portfolio" },
};
