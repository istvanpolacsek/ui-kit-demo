import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormShipping } from "./FormShipping";
const meta = {
  title: "Forms/Form Shipping",
  component: FormShipping,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormShipping>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
