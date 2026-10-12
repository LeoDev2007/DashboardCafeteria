import { Portal, Select, createListCollection } from "@chakra-ui/react"

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
}

const MultipleSelect = ({ label, placeholder = "Selecione...", items, value, onChange }: Props) => {
  const collection = createListCollection({ items });

  return (
     <Select.Root 
       multiple 
       collection={collection} 
       size="sm" 
       width="100%"
       value={value}
       onValueChange={(details) => onChange?.(details.value)} 
     >
      <Select.HiddenSelect />
      <Select.Label style={{ color: "#2E5697", fontWeight: "bold", marginBottom: "4px" }}>
        {label}
      </Select.Label>
      
      <Select.Control>
        <Select.Trigger 
          style={{ 
            padding: "1rem", 
            height: "45px", 
            borderRadius: "6px", 
            border: "1px solid #CBD5E1",
            backgroundColor: "#fff"
          }}
        >
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup style={{ marginRight: "10px" }}>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      
      <Portal>
        {/* Adicionado o Positioner e Content com estilos de Menu Flutuante */}
        <Select.Positioner style={{ zIndex: 9999 }}>
          <Select.Content 
            bg="white" 
            borderRadius="md" 
            boxShadow="lg" 
            border="1px solid #E2E8F0"
            padding="2"
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "4px",
              minWidth: "240px"
            }}
          >
            {items.map((item) => (
              <Select.Item 
                item={item} 
                key={item.value}
                cursor="pointer"
                borderRadius="sm"
                padding="2"
                _hover={{ bg: "#F1F5F9" }}
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  fontSize: "14px"
                }}
              >
                {item.label}
                <Select.ItemIndicator style={{ color: "#2E5697" }} />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default MultipleSelect
