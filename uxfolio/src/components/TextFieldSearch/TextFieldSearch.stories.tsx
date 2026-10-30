import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextFieldSearch } from "./TextFieldSearch";
const meta = {
  title: "Input/Text field / Search",
  component: TextFieldSearch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextFieldSearch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
