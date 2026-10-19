import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuSeparator } from "./MenuSeparator";
const meta = {
  title: "Menu/Menu Separator",
  component: MenuSeparator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuSeparator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
