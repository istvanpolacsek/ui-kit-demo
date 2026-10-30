import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopTextField } from "./DesktopTextField";
const meta = {
  title: "  ↳ Input Field/Desktop / Text Field",
  component: DesktopTextField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopTextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    state: "Default",
    showLeftIcon: true,
    showRightIcon: true,
    showLink: true,
    showHelperText: true,
    showCountryCode: false,
    instance: "642:6538",
    showDuration: false,
  },
};
