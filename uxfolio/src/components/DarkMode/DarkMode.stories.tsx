import type { Meta, StoryObj } from "@storybook/react-vite";
import { DarkMode } from "./DarkMode";
const meta = {
  title: "Visual asset/Dark mode",
  component: DarkMode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DarkMode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
