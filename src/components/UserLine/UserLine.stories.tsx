import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserLine } from "./UserLine";
const meta = {
  title: "Visual asset/User line",
  component: UserLine,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserLine>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { weight: "Light", mode: "Light" } };
