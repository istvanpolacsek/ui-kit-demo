import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddPage } from "./AddPage";
const meta = {
  title: "Visual asset/Add page",
  component: AddPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
