import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonAccountPage } from "./NavigationButtonAccountPage";
const meta = {
  title: "Button/Navigation button / Account page",
  component: NavigationButtonAccountPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationButtonAccountPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
