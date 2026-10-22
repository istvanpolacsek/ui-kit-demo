import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationInLine } from "./NavigationInLine";
const meta = {
  title: "Section/Navigation / In-line",
  component: NavigationInLine,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationInLine>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasPage4: false, type: "Regular" } };
