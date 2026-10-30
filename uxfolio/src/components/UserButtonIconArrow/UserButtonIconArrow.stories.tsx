import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserButtonIconArrow } from "./UserButtonIconArrow";
const meta = {
  title: "Module/User button icon / Arrow",
  component: UserButtonIconArrow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserButtonIconArrow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { direction: "Left" } };
