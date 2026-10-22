import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserInputField } from "./UserInputField";
const meta = {
  title: "Module/User input field",
  component: UserInputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserInputField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Empty" } };
