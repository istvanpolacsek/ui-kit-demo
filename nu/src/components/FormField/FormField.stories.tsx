import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";
const meta = {
  title: "  ↳ Form/Form field",
  component: FormField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
