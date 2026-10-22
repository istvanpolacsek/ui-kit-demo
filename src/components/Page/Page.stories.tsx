import type { Meta, StoryObj } from "@storybook/react-vite";
import { Page } from "./Page";
const meta = {
  title: "Visual asset/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
