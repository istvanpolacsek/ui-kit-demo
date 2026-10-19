import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationNext } from "./PaginationNext";
const meta = {
  title: "Pagination/Pagination Next",
  component: PaginationNext,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationNext>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
