import { Menu, Portal } from "@chakra-ui/react";
import profile from '../assets/profile.png'



const ProfileMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <div style={{width:"40px", cursor: "pointer"}}>
            <img src={profile} alt="Imagem de perfil" />
        </div>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content padding="1rem" display="flex" flexDirection="column" gap="10px">
            <Menu.Item value="rename">Perfil</Menu.Item>
            <Menu.Item value="export">Configurações</Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
            >
                Sair
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ProfileMenu;
