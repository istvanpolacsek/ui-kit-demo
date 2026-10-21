import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppContainer } from "./AppContainer";
const meta = {
  title: "🖥️ Desktop web components/App container",
  component: AppContainer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppContainer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
