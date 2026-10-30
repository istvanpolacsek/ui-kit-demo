import type { Meta, StoryObj } from "@storybook/react-vite";
import { Settings } from "./Settings";
const meta = {
  title: "Visual asset/Settings",
  component: Settings,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Settings>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
