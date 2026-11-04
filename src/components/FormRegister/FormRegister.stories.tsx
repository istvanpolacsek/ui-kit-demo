import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormRegister } from "./FormRegister";
const meta = {
  title: "Forms/Form Register",
  component: FormRegister,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormRegister>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
