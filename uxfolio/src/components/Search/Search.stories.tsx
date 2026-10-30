import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "./Search";
const meta = {
  title: "Visual asset/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Search>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
