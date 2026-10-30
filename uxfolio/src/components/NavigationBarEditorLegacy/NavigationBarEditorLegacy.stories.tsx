import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationBarEditorLegacy } from "./NavigationBarEditorLegacy";
const meta = {
  title: "Overlay/Navigation bar / Editor / Legacy",
  component: NavigationBarEditorLegacy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationBarEditorLegacy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Main pages" } };
