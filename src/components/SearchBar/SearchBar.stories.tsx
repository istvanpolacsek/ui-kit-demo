import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "./SearchBar";
const meta = {
  title: "Design System/Search bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { placeholder: "Search in this deal" } };
