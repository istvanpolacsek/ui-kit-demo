import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewPortfolioLayout } from "./TypePreviewPortfolioLayout";
const meta = {
  title: "Visual asset/Type preview / Portfolio layout",
  component: TypePreviewPortfolioLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewPortfolioLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Grid" } };
