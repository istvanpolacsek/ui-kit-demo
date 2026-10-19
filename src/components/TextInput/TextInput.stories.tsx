import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";
const meta = {
  title: "Claude Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { dropdown: false, size: "Large" } };
