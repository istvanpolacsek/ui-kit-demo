import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubheaderNonEditorPage } from "./SubheaderNonEditorPage";
const meta = {
  title: "Panel/Subheader / Non-editor page",
  component: SubheaderNonEditorPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SubheaderNonEditorPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
