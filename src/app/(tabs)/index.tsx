import { Avatar } from "@/components/avatar";
import { Email } from "@/components/email";
import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { EMAILS } from "@/utils/emails";
import { FlatList, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: "https://github.com/Keventon.png" }}
          size="small"
        />
      </Input>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
    </View>
  );
}
