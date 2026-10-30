import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonEditorNavBar } from "./NavigationButtonEditorNavBar";
const meta = {
  title: "Button/Navigation button / Editor nav bar",
  component: NavigationButtonEditorNavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationButtonEditorNavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", type: "Icon and label" },
};
