import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoWidget } from "./InfoWidget";
const meta = {
  title: "  ↳ Widgets/Info widget",
  component: InfoWidget,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InfoWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
