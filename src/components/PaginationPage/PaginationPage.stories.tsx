import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationPage } from "./PaginationPage";
const meta = {
  title: "Pagination/Pagination Page",
  component: PaginationPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { number: "1", state: "Default" } };
