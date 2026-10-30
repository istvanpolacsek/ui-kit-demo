import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileDropdown } from "./MobileDropdown";
const meta = {
  title: "  ↳ Dropdown/Mobile / Dropdown",
  component: MobileDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
