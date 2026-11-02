import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField2 } from "./FormField2";
const meta = {
  title: "  ↳ Form/Form field 2",
  component: FormField2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormField2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
