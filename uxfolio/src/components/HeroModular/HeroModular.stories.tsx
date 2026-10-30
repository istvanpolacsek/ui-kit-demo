import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroModular } from "./HeroModular";
const meta = {
  title: "Section/Hero / Modular",
  component: HeroModular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroModular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { layout: "Text only", navPosition: "Above" },
};
