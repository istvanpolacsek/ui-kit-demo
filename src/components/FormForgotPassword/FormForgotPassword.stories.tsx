import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormForgotPassword } from "./FormForgotPassword";
const meta = {
  title: "Forms/Form Forgot Password",
  component: FormForgotPassword,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormForgotPassword>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
