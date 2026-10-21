import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppName } from "./AppName";
const meta = {
  title: "🖥️ Desktop web components/App name",
  component: AppName,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppName>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
