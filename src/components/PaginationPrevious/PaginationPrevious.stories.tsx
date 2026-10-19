import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationPrevious } from "./PaginationPrevious";
const meta = {
  title: "Pagination/Pagination Previous",
  component: PaginationPrevious,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationPrevious>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
