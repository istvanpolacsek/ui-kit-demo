import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToolbarModule } from "./ToolbarModule";
const meta = {
  title: "Overlay/Toolbar / Module",
  component: ToolbarModule,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ToolbarModule>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { isCustomImage: true, type: "Text box", mode: "Light" },
};
