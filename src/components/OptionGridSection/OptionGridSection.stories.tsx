import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionGridSection } from "./OptionGridSection";
const meta = {
  title: "Panel/Option grid / Section",
  component: OptionGridSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionGridSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { type: "Basic sections", page: "Main" },
};
