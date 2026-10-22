import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationBarNonEditor } from "./NavigationBarNonEditor";
const meta = {
  title: "Overlay/Navigation bar / Non-editor",
  component: NavigationBarNonEditor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationBarNonEditor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Account" } };
