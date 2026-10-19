import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextTitlePage } from "./TextTitlePage";
const meta = {
  title: "Text/Text Title Page",
  component: TextTitlePage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextTitlePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { text: "Text Title Page" } };
