import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./Sidebar";
const meta = {
  title: "Claude Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { collapsed: "false" } };
