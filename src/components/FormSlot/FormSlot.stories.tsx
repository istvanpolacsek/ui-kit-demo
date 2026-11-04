import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormSlot } from "./FormSlot";
const meta = {
  title: "Forms/Form (Slot)",
  component: FormSlot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormSlot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
