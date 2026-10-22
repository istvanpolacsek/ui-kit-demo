import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBar } from "./StatusBar";
const meta = {
  title: "  ↳ Navigation 🆕/Status bar",
  component: StatusBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof StatusBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
