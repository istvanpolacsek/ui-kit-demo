import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar } from "./NavBar";
const meta = {
  component: NavBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Default",
    items: [
      { label: "Pipeline overview", state: "Selected" },
      { label: "Leads", state: "Default" },
      { label: "Analytics", state: "Default" },
      { label: "Contracts", state: "Default" },
    ],
  },
};
