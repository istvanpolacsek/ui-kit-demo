import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "./SearchBar";
const meta = {
  title: "  ↳ Search bar/Search Bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default", device: "Desktop" } };
