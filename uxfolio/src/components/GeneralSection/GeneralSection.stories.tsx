import type { Meta, StoryObj } from "@storybook/react-vite";
import { GeneralSection } from "./GeneralSection";
const meta = {
  title: "Section/General section",
  component: GeneralSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["Flexible", "4", "5", "6", "8", "10"],
    },
  },
} satisfies Meta<typeof GeneralSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    module: "265:14895",
    module1: "265:14894",
    module2: "265:15070",
    showUI: true,
    modules: 1,
    size: "6",
  },
};
