import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList } from "./TextList";
const meta = {
  title: "Text/Text List",
  component: TextList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasTitle: false, density: "Default", text: "Text Strong" },
};
