import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBoxTextUnderlay } from "./TextBoxTextUnderlay";
const meta = {
  title: "Module/Text box / Text underlay",
  component: TextBoxTextUnderlay,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextBoxTextUnderlay>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasModuleExtension: "False" } };
