import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { iconNameOptions } from "./Icon.options";
const meta = {
  title: "🖋️ Icons/🖋️ Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { name: "Activity", size: 24 } };

const names = iconNameOptions;
export const AllIcons: Story = {
  args: Default.args,
  parameters: { layout: "padded" },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
      }}
    >
      {names.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
          }}
        >
          <Icon {...args} name={name as typeof args.name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
