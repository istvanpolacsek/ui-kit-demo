import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationNumber } from "./PaginationNumber";
const meta = {
  title: "  ↳ Pagination 🆕/Pagination Number",
  component: PaginationNumber,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationNumber>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
