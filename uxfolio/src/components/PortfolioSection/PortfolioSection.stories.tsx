import type { Meta, StoryObj } from "@storybook/react-vite";
import { PortfolioSection } from "./PortfolioSection";
const meta = {
  title: "Section/Portfolio section",
  component: PortfolioSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PortfolioSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showUI: true, type: "Grid" } };
