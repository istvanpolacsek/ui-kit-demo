import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditText } from "./EditText";
const meta = {
  title: "Visual asset/Edit text",
  component: EditText,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
