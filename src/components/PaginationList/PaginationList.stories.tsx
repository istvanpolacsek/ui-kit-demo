import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationList } from "./PaginationList";
const meta = {
  title: "Pagination/Pagination List",
  component: PaginationList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
