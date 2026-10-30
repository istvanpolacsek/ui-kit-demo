import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignIn } from "./SignIn";
const meta = {
  title: "Visual asset/Sign in",
  component: SignIn,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SignIn>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
