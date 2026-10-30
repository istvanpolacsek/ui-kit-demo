import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationItemPortfolioTitle } from "./NavigationItemPortfolioTitle";
const meta = {
  title: "Module/Navigation item / Portfolio title",
  component: NavigationItemPortfolioTitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationItemPortfolioTitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Text" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
