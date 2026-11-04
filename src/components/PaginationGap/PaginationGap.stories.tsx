import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationGap } from "./PaginationGap";
const meta = {
  title: "Pagination/Pagination Gap",
  component: PaginationGap,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationGap>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
