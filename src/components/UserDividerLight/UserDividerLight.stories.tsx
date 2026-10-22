import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserDividerLight } from "./UserDividerLight";
const meta = {
  title: "Module/User divider / Light",
  component: UserDividerLight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserDividerLight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
