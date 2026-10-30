import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditPage } from "./EditPage";
const meta = {
  title: "Visual asset/Edit page",
  component: EditPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EditPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
