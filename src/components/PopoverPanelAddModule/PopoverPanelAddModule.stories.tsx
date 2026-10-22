import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelAddModule } from "./PopoverPanelAddModule";
const meta = {
  title: "Overlay/Popover panel / Add module",
  component: PopoverPanelAddModule,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelAddModule>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
