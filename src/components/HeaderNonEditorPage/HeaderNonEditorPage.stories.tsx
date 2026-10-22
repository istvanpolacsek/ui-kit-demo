import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderNonEditorPage } from "./HeaderNonEditorPage";
const meta = {
  title: "Panel/Header / Non-editor page",
  component: HeaderNonEditorPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeaderNonEditorPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Simple" } };
