import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonBack } from "./NavigationButtonBack";
const meta = {
  title: "Button/Navigation button / Back",
  component: NavigationButtonBack,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationButtonBack>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
