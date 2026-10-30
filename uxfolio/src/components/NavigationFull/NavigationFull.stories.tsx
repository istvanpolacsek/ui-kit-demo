import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationFull } from "./NavigationFull";
const meta = {
  title: "Section/Navigation / Full",
  component: NavigationFull,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    navigationItemPortfolioTitleType: {
      control: "select",
      options: ["Text", "Bolded text", "Logo"],
    },
  },
} satisfies Meta<typeof NavigationFull>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasPage4: false,
    lineWeight: "313:6227",
    showUI: true,
    showAddSection: true,
    type: "Name sides",
    navigationItemPortfolioTitleType: "Text",
  },
};
