import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomepageSearchWidget } from "./HomepageSearchWidget";
const meta = {
  title: "  ↳ Widgets 🆕/Homepage Search Widget ",
  component: HomepageSearchWidget,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HomepageSearchWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { steps: "Step 1", device: "Web" } };
