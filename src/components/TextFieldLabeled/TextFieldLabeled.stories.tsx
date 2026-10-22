import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextFieldLabeled } from "./TextFieldLabeled";
const meta = {
  title: "Input/Text field / Labeled",
  component: TextFieldLabeled,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextFieldLabeled>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default", mode: "Light" } };
