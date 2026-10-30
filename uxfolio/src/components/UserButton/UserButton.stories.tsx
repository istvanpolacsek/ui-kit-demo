import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserButton } from "./UserButton";
const meta = {
  title: "Module/User button",
  component: UserButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
