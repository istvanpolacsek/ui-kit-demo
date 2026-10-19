import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";
const meta = {
  title: "Pagination/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
