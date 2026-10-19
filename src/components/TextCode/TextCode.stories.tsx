import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextCode } from "./TextCode";
const meta = {
  title: "Text/Text Code",
  component: TextCode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextCode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Code" } };
