import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormContact } from "./FormContact";
const meta = {
  title: "Forms/Form Contact",
  component: FormContact,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormContact>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
