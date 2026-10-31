import { Portal, Select, createListCollection } from "@chakra-ui/react";

interface ItemSelect {
  label: string;
  value: string;
}

type Props = {
  label: string;
  placeholder?: string;
  items: ItemSelect[];
  value?: string[];
  onChange?: (values: string[]) => void;
};

const MultipleSelect = ({
  label,
  placeholder = "Selecione...",
  items,
  value,
  onChange,
}: Props) => {
  const collection = createListCollection({ items });

  return (
    <Select.Root
      multiple
      collection={collection}
      size="md"
      width="100%"
      value={value}
      onValueChange={(details) => onChange?.(details.value)}
    >
      <Select.HiddenSelect />

      <Select.Label
        color="#334155"
        fontSize="14px"
        fontWeight="600"
        marginBottom="6px"
      >
        {label}
      </Select.Label>

      <Select.Control width="100%" position="relative">
        <Select.Trigger
          width="100%"
          minHeight="44px"
          paddingLeft="14px"
          paddingRight="40px"
          borderRadius="8px"
          border="1px solid #CBD5E1"
          backgroundColor="#FFFFFF"
          color="#0F172A"
          fontSize="14px"
          _hover={{
            borderColor: "#94A3B8",
          }}
          _focusVisible={{
            borderColor: "#315A98",
            boxShadow: "0 0 0 3px rgba(49, 90, 152, 0.12)",
          }}
        >
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>

        <Select.IndicatorGroup
          position="absolute"
          right="12px"
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none"
        >
          <Select.Indicator color="#64748B" />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner zIndex={9999}>
          <Select.Content
            width="100%"
            minWidth="240px"
            backgroundColor="#FFFFFF"
            border="1px solid #E2E8F0"
            borderRadius="8px"
            boxShadow="0 8px 24px rgba(15, 23, 42, 0.1)"
            padding="6px"
          >
            {items.map((item) => (
              <Select.Item
                item={item}
                key={item.value}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="10px 12px"
                borderRadius="6px"
                fontSize="14px"
                color="#334155"
                cursor="pointer"
                _hover={{
                  backgroundColor: "#F1F5F9",
                }}
                _highlighted={{
                  backgroundColor: "#EFF6FF",
                  color: "#315A98",
                }}
              >
                {item.label}

                <Select.ItemIndicator color="#315A98" />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default MultipleSelect;