import type { Meta, StoryObj } from "@storybook/react-vite";
import { Password } from "./Password";
const meta = {
  title: "Visual asset/Password",
  component: Password,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Password>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
