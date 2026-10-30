import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionPreviewSmallDividerLineWeight } from "./OptionPreviewSmallDividerLineWeight";
const meta = {
  title: "Visual asset/Option preview / Small / Divider line weight",
  component: OptionPreviewSmallDividerLineWeight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionPreviewSmallDividerLineWeight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { weight: "Light" } };
