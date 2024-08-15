const { widget } = figma;
const { useSyncedState, AutoLayout, Input } = widget;

function Widget() {
  const [input, setInput] = useSyncedState("input", "");

  return (
    <AutoLayout
      verticalAlignItems={"center"}
      spacing={8}
      padding={16}
      cornerRadius={1000}
      fill={"#1CAAA1"}
      stroke={"#FFFFFF"}
    >
      <Input
        fontSize={32}
        width={42}
        horizontalAlignText={"center"}
        value={input}
        onTextEditEnd={({ characters }) => setInput(characters)}
      />
    </AutoLayout>
  );
}

widget.register(Widget);
