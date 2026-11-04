import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuHeading } from "./MenuHeading";
const meta = {
  title: "Menu/Menu Heading",
  component: MenuHeading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
