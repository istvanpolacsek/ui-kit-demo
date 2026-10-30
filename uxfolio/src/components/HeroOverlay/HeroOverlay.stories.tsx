import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroOverlay } from "./HeroOverlay";
const meta = {
  title: "Section/Hero / Overlay",
  component: HeroOverlay,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroOverlay>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { navPosition: "Above" } };
