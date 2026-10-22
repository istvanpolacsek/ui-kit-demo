import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterTemplate } from "./FilterTemplate";
const meta = {
  title: "  ↳ Filters 🆕/Filter Template",
  component: FilterTemplate,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilterTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
