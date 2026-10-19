import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormNewsletter } from "./FormNewsletter";
const meta = {
  title: "Forms/Form Newsletter",
  component: FormNewsletter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormNewsletter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
